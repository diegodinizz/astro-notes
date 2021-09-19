import styled from 'styled-components'
import { useSelector } from 'react-redux'

import { Note } from '../components/Note'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`

export const NotesList = () => {
  const notes = useSelector(state => state.notes)

  return (
    <Container>
      <Title>Notes List</Title>
      {notes.map(({ id, content }) => (
        <Note key={id} text={content} />
      ))}
    </Container>
  )
}
