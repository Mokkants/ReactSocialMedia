import React from 'react'

const Message = (props) => {
    return(
        <li key="props.message.id" className="message">
        <div>
            <div>
                {props.message.senderName}
            </div>
            <div>
                {/*{props.partner.profilePicture} TODO: Move this into ifelse so it only shows on partner message*/}
            </div>
        </div>
        <div>
            {props.message.text}
        </div>
        </li>
    )
}

export default Message