import React, {Component} from 'react'
import Messages from './chat/Messages';

class Chat extends Component{
    constructor(){
        super();
        this.state={
            messages:[{senderName:"Filip",text:"Hi!"}, {senderName:"Filip",text:"Hi!"}, {senderName:"Filip",text:"Hi!"}],
            partner:{
                name:"Filip"
            }
        }
    }
    render(){
        return( 
            <Messages 
                messages={this.state.messages} 
                partner={this.state.partner}
            />
        )
    }
}

export default Chat