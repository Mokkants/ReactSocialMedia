import React from 'react'
import Message from './messages/Message';
import List from '@material-ui/core/List';

const Messages = ({messages,partner}) => {
    return (
        <List dense>
            {messages ? (
                messages.map(message=>{
                    return <Message message={message}/>
                })
            ):(
                <div>Start a conversation with {partner.name}!</div> 
            )}
        </List>
    )
}

export default Messages;