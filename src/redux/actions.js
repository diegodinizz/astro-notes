import { NotesActionTypes } from './types'

export const addNote = content => ({
  type: NotesActionTypes.ADD_NOTE,
  payload: content
})

export const deleteNote = content => ({
  type: NotesActionTypes.DELETE_NOTE,
  payload: content
})

export const setCurrentNote = id => ({
  type: NotesActionTypes.SET_CURRENT_NOTE,
  payload: id
})

export const updateNote = (id, content) => ({
  type: NotesActionTypes.UPDATE_NOTE,
  payload: { id, content }
})
