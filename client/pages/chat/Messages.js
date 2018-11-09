import React from 'react'
import Message from './messages/Message';

const Messages = (props) => {
    if(!props.messages){
        return <div>Start a conversation with {props.partner.name}</div>
    }
    else{
        return (
            <ul className="messages">
                {props.messages.map(message=>{
                    return <Message message={message}/>
                })}
            </ul>
        )
    } 
}

export default Messages