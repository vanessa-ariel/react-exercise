import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { withRouter } from 'react-router'
import Login from './pages/login'
import Signup from './pages/signup'
import PageNotFound from './pages/pageNotFound'
import Navbar from './components/navbar'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar/>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/conta' component={Signup} />
          <Route component={PageNotFound} />
        </Switch>
      </React.Fragment>
    )
  }
}

export default withRouter(App)
