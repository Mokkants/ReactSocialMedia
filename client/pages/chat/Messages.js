import React from 'react'
import Message from './messages/Message';

const Messages = ({messages,partner}) => {
    return (
        <ul className="messages">
        {messages ? (
            <div>Start a conversation with {partner.name}!</div> 
        ) : (
            messages.map(message=>{
                return <Message message={message}/>
            })
        )}      
        </ul>
    )
}

export default Messages