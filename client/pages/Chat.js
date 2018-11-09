import React, {Component} from 'react'
import Messages from './chat/Messages';
import InputBox from './chat/InputBox';

class Chat extends Component{
    constructor(){
        super();
        this.state={
            messages:[{senderName:"Filip",text:"Hi!"}, {senderName:"Filip",text:"Hi!"}, {senderName:"Filip",text:"Hi!"}],
            partner:{
                name:"Filip"
            }
        }
        this.sendMessage = this.sendMessage.bind(this)
    }
    render(){
        return(<div>
            <Messages 
                messages={this.state.messages} 
                partner={this.state.partner}
            />
            <InputBox sendMessage={this.sendMessage}/>
        </div>)
    }
    sendMessage(text){
        let messages = this.state.messages;
        messages.push({senderName:"Filip", text:text});
        this.setState({messages:messages})
    }
}

export default Chat