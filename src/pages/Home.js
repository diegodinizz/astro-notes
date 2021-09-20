import styled from 'styled-components'

import { NewNote } from '../containers/NewNote'
import { NotesList } from '../containers/NotesList'

const Container = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`

export const Home = () => (
  <Container>
    <NewNote />
    <NotesList />
  </Container>
)
