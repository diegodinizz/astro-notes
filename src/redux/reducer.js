import { NotesActionTypes } from './types'
import { addNewNote, updateExistingNote } from './utils'

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
      }
    case NotesActionTypes.UPDATE_NOTE:
      return {
        ...state,
        notes: updateExistingNote(state.notes, action.payload)
      }
    //   notes: state.notes.map(note => {
    //     if (note.id === action.payload.id) {
    //       return {
    //         ...note,
    //         ...action.payload
    //       }
    //     }
    //     return note
    //   })
    // }
    default:
      return state
  }
}
