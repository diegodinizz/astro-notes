import { NotesActionTypes } from './types'
import { addNewNote } from './utils'

const INITIAL_STATE = {
  notes: [],
  currentNote: null
}

export const notesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NotesActionTypes.ADD_NOTE:
      return {
        ...state,
        notes: [...state.notes, addNewNote(action.payload)]
      }
    case NotesActionTypes.DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter(note => note.id !== action.payload)
      }
    case NotesActionTypes.SET_CURRENT_NOTE:
      return {
        ...state,
        currentNote: action.payload
        // currentNote: state.notes.find(note => note.id === action.payload)
      }
    default:
      return state
  }
}
