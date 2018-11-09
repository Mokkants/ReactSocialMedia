import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Chat from './Chat';

const styles = theme => ({
    card: {
      maxWidth: 600,
      margin: 'auto',
      marginTop: theme.spacing.unit * 5
    },
    title: {
      padding:`${theme.spacing.unit * 3}px ${theme.spacing.unit * 2.5}px 
      ${theme.spacing.unit * 2}px`,
      color: theme.palette.text.secondary
    },
    media: {
      minHeight: 400
    }
}) 

class Home extends Component {
    static propTypes = {
      classes: PropTypes.object.isRequired
    }
    constructor(props){
      super(props)
      this.state={
        appName:"[INSERT SOCIAL MEDIA NAME HERE]"
      }
    }
    render() {
      const {classes} = this.props 
      return (
        <div>
          <Card className={classes.card}>
            <Typography type="headline" component="h1" className=
            {classes.title}>
              Home
            </Typography>
            <CardContent>
              <Typography type="body2" component="h2">
                Welcome to {this.state.appName}!
              </Typography>
            </CardContent>
          </Card>
          <Chat></Chat>
        </div>
      )
    }
}

export default withStyles(styles)(Home)