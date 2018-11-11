import React, {Component} from 'react'
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types'
import Messages from './chat/Messages';
import InputBox from './chat/InputBox';
import Header from './chat/Header'

class Chat extends Component{
    static propTypes = {
        classes: PropTypes.object.isRequired
    }
    constructor(props){
        super(props);
        this.state={
            messages:[{senderName:"Filip",text:"Hi!"}, {senderName:"Filip",text:"Hi!"}, {senderName:"Filip",text:"Hi!"}],
            partner:{
                name:"George"
            }
        }
        this.sendMessage = this.sendMessage.bind(this)
    }
    render(){
        const {classes} = this.props 
        return(<div>
            <Header partner={this.state.partner}/>
            <Messages 
                messages={this.state.messages} 
                partner={this.state.partner}
                className={classes.root}
            />
            <InputBox className={classes.inputBox} sendMessage={this.sendMessage}/>
        </div>)
    }
    sendMessage(text){
        let messages = this.state.messages;
        messages.push({senderName:"Filip", text:text});
        this.setState({messages:messages})
    }
}

const styles = theme => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    inputBox:{
        width: '100%'
    }
  });

export default withStyles(styles)(Chat)