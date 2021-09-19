import { v4 as uuidv4 } from 'uuid'
import moment from 'moment'

// export const getNoteContent = (notes, id) => {
//   const existingNote = notes.find(note => note.id === id)

//   // console.log(existingNote.content)

//   if (existingNote) {
//     return existingNote.content
//   }
// }

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
  // console.log('notes', notes)
  // console.log('payload', payload)

  // const { id, content } = payload

  // console.log('id', id)
  // console.log('content', content)

  // const addItemToBag = (bagItems, bagItemToAdd) => {
  const existingNote = notes.find(note => note.id === payload.id)

  // console.log('existingNote', existingNote)

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

  console.log(notes)

  return [...notes]
}

//   const updatedNote = {
//     ...notes.find(note => note.id === id),
//     ...payload
//   }

//   return updatedNote
// }
