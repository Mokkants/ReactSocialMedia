import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './pages/Home'
import SignUp from './pages/SignUp';

class MainRouter extends Component {
  render() {
    return (<div>
      <Switch>
        <Route exact path="/" component={SignUp}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/login" component={Signin}/>
      </Switch>
    </div>)
  }
}
export default MainRouter