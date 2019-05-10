import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Form from './Form'
import Dashboard from './Dashboard/Dashboard'


const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Form }/>
      <Route path='/Dashboard' component={Dashboard}/>
    </Switch>
  </main>
)

export default Main
