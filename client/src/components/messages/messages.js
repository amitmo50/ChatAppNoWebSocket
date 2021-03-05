import React from 'react';
// import ScrollToBottom from 'react-scroll-to-bottom';
import './messages.css';
import Message from '../message/message';
const Messages = ({messages, currentUser}) => {
    return (
        <div className="messages">
            {messages.map((message, index) => <div key={index}><Message message={message} currentUser={currentUser}/></div>)}
        </div>
    );
}

export default Messages;