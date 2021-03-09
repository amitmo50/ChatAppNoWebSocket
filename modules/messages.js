const messages = {};
const events = require('events');
const messageEventEmitter = new events.EventEmitter();
messageEventEmitter.on('newMessage', (id, room, from, message) => {
    if(!messages[room]) {
        messages[room] = [{id, from, message, createdAt: new Date()}];
        return
    }
    messages[room] = [...messages[room], {id, from, message, createdAt: new Date()}];
});
messageEventEmitter.on('connection', (id, room, userName) => {
    const message = `Wolcome ${userName} to the room ${room}`;
    const from = 'Admin';
    if(!messages[room]) {
        messages[room] = [{id, from, message, createdAt: new Date()}];
        return
    }
    messages[room] = [...messages[room], {id, from, message, createdAt: new Date()}];
});

messageEventEmitter.on('disconnection', (id, room, userName) => {
    const message = `${userName} has left the room ${room}`;
    const from = 'Admin';
    if(!messages[room]) {
        messages[room] = [{id, from, message, createdAt: new Date()}];
        return
    }
    messages[room] = [...messages[room], {id, from, message, createdAt: new Date()}];
});

module.exports = {messages, messageEventEmitter}