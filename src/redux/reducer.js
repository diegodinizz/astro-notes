import { v4 as uuidv4 } from 'uuid'
import moment from 'moment'

import { NotesActionTypes } from './types'

const INITIAL_STATE = {
  notes: []
}

export const notesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NotesActionTypes.ADD_NOTE:
      // const date = new Date()
      const newNote = {
        id: uuidv4(),
        createdAt: moment().format('dddd, MMMM Do YYYY'),
        content: action.payload
      }
      return {
        ...state,
        notes: [...state.notes, newNote]
      }
    case NotesActionTypes.DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter(note => note.id !== action.payload)
      }
    default:
      return state
  }
}
