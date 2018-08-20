var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var mongoose = require('mongoose');

app.use(express.static(__dirname));
app.use(bodyParser.json());
// Need urlencoded for displaying message on front side
app.use(bodyParser.urlencoded({extended: false}))

var dbUrl = 'mongodb://admin:vedzam-cufRaz-9zojdu@ds125862.mlab.com:25862/message_app_node_';

var messages = [
    {name: 'Tim', message: 'Hi'},
    {name: 'Ben', message: 'Hello'},

]

app.get('/messages', (req, res) => {
    res.send(messages);
})

app.post('/messages', (req, res) => {
    messages.push(req.body); 
    io.emit('message', req.body)
    res.sendStatus(200);
})

io.on('connection', (socket) => {
    console.log('a user connected')
})

mongoose.connect(dbUrl,{useNewUrlParser: true}, (err) =>{
    console.log('mongo bd connected', err);
})

var server = http.listen(4550, () => {
    console.log('Server is listening on Port', server.address().port )
});
