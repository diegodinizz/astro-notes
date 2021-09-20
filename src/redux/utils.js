import { v4 as uuidv4 } from 'uuid'
import moment from 'moment'

export const addNewNote = payload => {
  const note = {
    id: uuidv4(),
    createdAt: moment().format('dddd, MMMM Do YYYY'),
    updatedAt: '',
    content: payload
  }

  return note
}

export const updateExistingNote = (notes, payload) => {
  const existingNote = notes.find(note => note.id === payload.id)

  if (existingNote) {
    return notes.map(note =>
      note.id === payload.id
        ? {
            ...note,
            content: payload.content,
            updatedAt: moment().format('MM/DD/YYYY, h:mm:ss a')
          }
        : note
    )
  }

  return [...notes]
}
