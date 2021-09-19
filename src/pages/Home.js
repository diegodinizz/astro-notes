import styled from 'styled-components'

import { NewNote } from '../containers/NewNote'
import { NotesList } from '../containers/NotesList'

const Container = styled.div`
  display: flex;
  flex-direction: row;
`

export const Home = () => (
  <Container>
    <NewNote />
    <NotesList />
  </Container>
)
