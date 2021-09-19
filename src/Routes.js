import { Route, Switch } from 'react-router-dom'

import { Home } from './pages/Home'
import { NoteDetail } from './pages/NoteDetail'
import { NotFound } from './pages/NotFound'

export const Routes = () => (
  <Switch>
    <Route exact path='/'>
      <Home />
    </Route>
    <Route exact path='/notes/:id'>
      <NoteDetail />
    </Route>
    {/* Catch all unmatched routes */}
    <Route>
      <NotFound />
    </Route>
  </Switch>
)
