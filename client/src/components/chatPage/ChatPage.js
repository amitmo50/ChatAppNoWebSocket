import React, { useState, useEffect } from 'react';
import axios from 'axios';
import queryString from 'query-string';
import InfoBar from '../infoBar/InfoBar';
import Input from '../input/input';
import Messages from '../messages/messages';
import TextContainer from '../textContainer/textContainer';
import './chatPage.css';


const ChatPage = ({ location }) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [users, setUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);
    
    /* Handle Connection of user */
    useEffect(() => {
        const {name, room} = queryString.parse(location.search);
        setName(name);
        setRoom(room);
        axios.post('/api/login' , { 
                userName: name, 
                room: room
        })
        .then(res => {
            if(res.data === 'Username is taken') {
                alert(res.data);
                window.location = "/";
                return;
            }
            setCurrentUser(res.data);
        })
        .catch(error => console.warn(error));
    }, [location.search]);

    /* Handle get all messages in room when first login*/
    useEffect(() => {
        
        if (!currentUser) {
            return;
        }
        axios.get('/api/all-messages', { 
            params: { room: room }
        }).then((res) => {
            setMessages([...messages, ...res.data]);
        });
    }, [currentUser])

    /* Handle Logout of a user */
    const handleLogoutUser = () => {
        if (!currentUser) {
            return;
        }
        axios.post('/api/logout',  { id: currentUser.id })
        .then( res => {
            setUsers(res.data);
        })
    }
    
    /* Handle long polling for get the recent messages */
    useEffect(() => {
        if (!currentUser) {
            return;
        }

       const intervalId = setInterval(() => {
           axios.get('/api/new-messages', { 
                params: { room: room, userId: currentUser.id }
            }).then((res) => {
                console.log(res.data)
                if(res.data.length !== 0){
                    setMessages([...messages, ...res.data]);
                }
            });
       }, 5000);

       return () => {
           clearInterval(intervalId);
       }
    });

    /* Handle getting the users in the room */
    useEffect(() => {
        
        axios
        .get('/api/users', { params: { room: room }})
        .then(res => setUsers(res.data))
        .catch(err => console.warn(err));

    }, [room, messages]);
    
    /* Handle sending Message */
    const sendMessage = (e) => {
        e.preventDefault();
        axios
        .post('/api/send-message' , {id:currentUser.id, from: name, room: room, message: message})
        .then(res => console.log(res))
        .catch(err => console.warn(err));
        setMessage('');
    }
    
    return (
        <>
            {currentUser && 
                <div className="outerContainer">
                    <div className="container">
                        <InfoBar room={room} handleLogoutUser={handleLogoutUser}/>
                        <Messages currentUser={currentUser} messages={messages}/>
                        <Input message={message} setMessage={setMessage} sendMessage={sendMessage}/>
                    </div>
                    <TextContainer users={users}/>
                </div>
            }
        </>
    );
}

export default ChatPage;