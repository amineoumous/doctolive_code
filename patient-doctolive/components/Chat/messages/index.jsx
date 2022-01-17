import React,{useRef, useEffect} from 'react';



const Messages = ({ messages, storedMessages }) => {
  const messagesEndRef = useRef(null);
  useEffect( ()=> {
	  if(messagesEndRef !== null){
        if(messagesEndRef !== null){
          let timer = setTimeout(() => {
            if(messagesEndRef.current){
              messagesEndRef.current.scrollIntoView({ behavior: "smooth", block:"nearest", inline:"start" });
            }
      		}, 200);
      		return () => clearTimeout(timer);
	  	  }
	  }
  }, [messages]);
  return(
    <div  className="content">
     
      <div className="messages">
      { storedMessages ? storedMessages.map((message, i) => <StoredMessage key={i} message={message}/>) : null }
      { messages ? messages.map((message, i) => <Message key={i} message={message}/>) : null }
      <div ref={messagesEndRef} />
    </div>
  </div>
  ) 
};

export default Messages;

const Message = ({ message: { data, isSentByCurrentUser }}) => {
  
  return(
        <div className={ (isSentByCurrentUser)? "messageContainer sent" : "messageContainer replies"}>
          <div className="message">
            {/* <p className="messageName">{ isSentByCurrentUser? "Moi" : data.sentBy}</p> */}
            <p className="messageText">{data.message}</p>
          </div>
            
        </div>    
  )}

const StoredMessage = ({message}) => {
  
  return(
        <div className={ (message.sentTo === "medecin")? "messageContainer sent" : "messageContainer replies"}>
          <div className="message">
            {/* <p className="messageName">{ isSentByCurrentUser? "Moi" : data.sentBy}</p> */}
            <p className="messageText">{message.message}</p>
          </div>
            
        </div>    
  )}

