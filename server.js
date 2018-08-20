var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname));
app.use(bodyParser.json());
// Need urlencoded for displaying message on front side
app.use(bodyParser.urlencoded({extended: false}))

var messages = [
    {name: 'Tim', message: 'Hi'},
    {name: 'Ben', message: 'Hello'},

]

app.get('/messages', (req, res) => {
    res.send(messages);
})

app.post('/messages', (req, res) => {
    messages.push(req.body); 
    res.sendStatus(200);
})

var server = app.listen(4550, () => {
    console.log('Server is listening on Port', server.address().port )
});
