import { Header } from '../containers/Header'
import { NewNote } from '../containers/NewNote'
import { NotesList } from '../containers/NotesList'

export const Home = () => (
  <div>
    <Header />
    <NewNote />
    <NotesList />
  </div>
)
