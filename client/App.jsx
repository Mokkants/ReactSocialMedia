import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles'
import {indigo, pink} from '@material-ui/core/colors'
import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import {hot} from 'react-hot-loader'
import MainRouter from './MainRouter.jsx'

const theme = createMuiTheme({
  
})

const App = () => (
  <BrowserRouter>
    <MuiThemeProvider theme={theme}>
      <MainRouter/>
    </MuiThemeProvider>
  </BrowserRouter>
)

export default hot(module)(App);