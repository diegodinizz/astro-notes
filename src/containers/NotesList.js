import styled from 'styled-components'
import { useSelector } from 'react-redux'

import { Note } from '../components/Note'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
`

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin: 40px 0;
`

const NoNotes = styled.div`
  text-align: center;
  font-size: 1.5em;
  font-weight: 300;
`

const NotesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

export const NotesList = () => {
  const notes = useSelector(state => state.notes)

  return (
    <Container>
      <Title>Notes List</Title>
      {!notes.length ? (
        <NoNotes>No notes</NoNotes>
      ) : (
        <NotesContainer>
          {notes.map(note => (
            <Note key={note.id} details={note} />
          ))}
        </NotesContainer>
      )}
    </Container>
  )
}
