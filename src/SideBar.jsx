import React from 'react';
import User from './User';
import { useSelector } from 'react-redux';

const SideBar = (props) => {

    const userChats = useSelector ( state => state.chatApp.chatUsers );
    const userChatComponent = userChats.map ((entry, key) => <User userChatName = { entry.userName } key={ key } onChatClick = { props.onChatClick }/>);

    return (
        <div id = 'side-bar'>
            <div id = 'side-header' className = 'header'>
                <strong>Chats</strong>
            </div>
            <div id = 'side-bar-user' className = 'bottom-container-info'>
                { userChatComponent }
            </div>
        </div>
    );
}

export default SideBar;
