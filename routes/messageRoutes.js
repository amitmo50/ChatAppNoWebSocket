const uniqid = require('uniqid');
const { messages, messageEventEmitter} = require('../modules/messages');
const { addUser, removeUser, getUser, getUsersInRoom, users} = require('../modules/users');
module.exports = (app) => {

    app.post('/api/login', (req, res) => {
        room = req.body.room;
        userName = req.body.userName;
        const {error, user} = addUser({id: uniqid() , userName, room})
        if(error) {
            res.send(error);
            return;
        }
        let id = 0;
        messageEventEmitter.emit('connection', id , room, userName);
        res.send(user);
    });

    app.get('/api/users', (req, res) => {
        const room = req.query.room;
        res.send(getUsersInRoom(room));
    });

    app.post('/api/logout', (req, res) => {
        id = req.body.id;
        let adminId = 0;
        messageEventEmitter.emit('disconnection', adminId , room, userName);
        res.send(removeUser(id));
    });

    app.get('/api/all-messages', (req, res) => {
        if(!messages[req.query.room]) { 
            return res.send([]);
        }
        res.status(200).send(messages[req.query.room]);
   });

    app.get('/api/new-messages', (req, res) => {
        if(!messages[req.query.room]) {
            return res.send([]);
        }
        res.status(200).send(messages[req.query.room].filter(message => message.createdAt > users[req.query.userId].lastConnection));
        users[req.query.userId].lastConnection = new Date();
   });

    app.post('/api/send-message', (req, res) => {
        const {id, room, from, message} = req.body;
        messageEventEmitter.emit('newMessage', id, room, from, message);
        res.status(200).send({ok: true, description: 'Message Sent!'})
    });
}