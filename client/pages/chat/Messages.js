import Message from './Messages/Message';

const Messages = (props) => {
    if(!props.messages){
        return <div>Start a conversation with</div>
    }
    else{
        return (
            <ul className="messages">
                {props.messages.map(message=>{
                    return <Message props={message}/>
                })}
            </ul>
        )
    } 
}

export default Messages