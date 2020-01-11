import React from 'react'
import { Switch } from 'react-router-dom'
import SignIn from '../pages/SignIn'
import Home from '../pages/Home'
import SignUp from '../pages/SignUp'
import Route from './Route'

export default function Routes() {
  return (
    <Switch>
      <Route exact path='/' component={Home} isPrivate />
      <Route path='/login' component={SignIn} />
      <Route path='/register' component={SignUp} />
    </Switch>
  )
}
