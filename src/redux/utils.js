import { v4 as uuidv4 } from 'uuid'
import moment from 'moment'

export const getNoteContent = (notes, id) => {
  const existingNote = notes.find(note => note.id === id)

  // console.log(existingNote.content)

  if (existingNote) {
    return existingNote.content
  }
}

export const addNewNote = payload => {
  const note = {
    id: uuidv4(),
    createdAt: moment().format('dddd, MMMM Do YYYY'),
    content: payload
  }

  return note
}
