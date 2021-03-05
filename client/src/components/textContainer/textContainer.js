import React from 'react';
import './textContainer.css';
import onlineIcon from '../../icons/onlineIcon.png';

const TextContainer = ({users}) => {
    return (
        <div className="textContainer">
            <div>
            <h1>Chat Application <span role="img" aria-label="emoji">💬</span></h1>
            </div>
            {
                users? (
                    <div className="user-viewer">
                        <h1 className="list-title">People Chatting Now:</h1>
                        <div className="activeContainer">
                            <h2>
                                {users.map((user, index) => (
                                    <div key={index} className="activeItem">
                                        {user.userName}
                                        <img alt="Online Icon" src={onlineIcon}/>
                                    </div>
                                ))}
                            </h2>
                        </div>
                    </div>
                ):null
            }
               
        </div>
    );
} 

export default TextContainer;