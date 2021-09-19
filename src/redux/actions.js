import { NotesActionTypes } from './types'

export const addNote = content => ({
  type: NotesActionTypes.ADD_NOTE,
  payload: content
})

export const deleteNote = content => ({
  type: NotesActionTypes.DELETE_NOTE,
  payload: content
})
