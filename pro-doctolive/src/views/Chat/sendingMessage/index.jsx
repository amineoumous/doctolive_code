import React from 'react';
// import {isAndroid, isBrowser} from 'react-device-detect'

import {Col, Row} from 'react-bootstrap'


import {FiSend} from 'react-icons/fi';


const Input = ({ setMessage, sendMessage, message, active }) =>
{
return (
  <form className="messageForm" autoComplete= "off">
      <Row className="chatContainer m-0">
        <Col lg="10" md="10" className="input_width pl-5">
          {
            active ?
            <input type="text" name="message" className="inputChat" placeholder="Ecrivez votre message ici"
              style={{width:"100%"}}
              value={message}
              autoFocus={true}
              autoComplete= "off"
              onChange={({ target: { value } }) => setMessage(value.replace(/^\s+/g, ''))}
              onKeyPress={event => event.key === 'Enter' && sendMessage(event)} />
              : 
              <p className="inputChat" > Cette consultation est términer vous pouvez plus envoyer des méssage </p>
          }
          
        </Col>
        <Col lg="2" className="btn_width">
          <Row className="justify-content-around">                   

	        {active ? <button  className="SendMsgBtn" type="button" onClick={e => sendMessage(e)}>{<FiSend size={'1.5rem'}/>} </button> : null}
          </Row> 
        </Col>
      </Row>
    </form>	
 
  
  
)
}
export default Input;
