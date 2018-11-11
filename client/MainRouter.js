import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './pages/Home'
import Menu from './core/Menu'

class MainRouter extends Component {
  render() {
    return (<div>
      <Menu/>
      <Switch>
        <Route exact path="/" component={Home}/>
      </Switch>
    </div>)
  }
}
export default MainRouter