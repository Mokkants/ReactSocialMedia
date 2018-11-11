import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import pic from './../../../assets/images/avatar.png'

const Message = (props) => {
    return(
        <ListItem key={props.message.id} button>
        <Avatar alt="Profile Picture" src={pic} />
        <ListItemText primary={props.message.text} />
        </ListItem>
    )
}

export default Message