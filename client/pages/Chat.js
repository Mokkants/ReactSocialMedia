import React, {Component} from 'react'
import Messages from './chat/Messages';

class Chat extends Component{
    constructor(){
        super();
        this.state={
            messages:[],
            partner:"Dummy"
        }
    }
    render(){
        return( 
            <Messages props={{
                messages:this.state.messages,
                partner: this.state.partner
            }}/>
        )
    }
}

export default Chat