const users = {
    0: { 
        id: 0,
        userName: 'Admin', 
        room: '',
        lastConnection:""
    },
};

const addUser = ({id, userName, room}) => {
    userName = userName.trim().toLowerCase();
    room = room.trim().toLowerCase();

    const existingUser = Object.keys(users).find((userKey) => users[userKey].room === room && users[userKey].userName === userName);
    if(existingUser) {
        return ({error: 'Username is taken'});
    }
    users[0].room = room;
    users[0].lastConnection = new Date();
    const user = {id, userName, room, lastConnection: new Date()};
    users[id] = user;
    return {user};
}

const removeUser = (id) => {
    Reflect.deleteProperty(users, id);
    return users;
}

const getUser = id => users[id];

const getUsersInRoom = room => Object.keys(users).filter((userKey) => users[userKey].room === room.toLowerCase()).map(userKey => users[userKey]);

module.exports = { addUser, removeUser, getUser, getUsersInRoom, users };