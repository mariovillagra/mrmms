import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Login from '/imports/ui/pages/Login'
import Dashboard from '/imports/ui/layout/Dashboard'

const Routes = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route path='/login' component={Login} />
        <Route path='/singup' render={() => (<div>{'singup'}</div>)} />
      </Switch>
    </div>
  </Router>
)

export default Routes
