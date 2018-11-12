import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './pages/Home'
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Menu from './core/Menu'

class MainRouter extends Component {
  render() {
    return (<div>
      <Menu/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/signup" component={SignUp}/>
        <Route path="/login" component={SignIn}/>
      </Switch>
    </div>)
  }
}
export default MainRouter