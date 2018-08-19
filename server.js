var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static(__dirname));
app.use(bodyParser.json());

var messages = [
    {name: 'Tim', message: 'Hi'},
    {name: 'Ben', message: 'Hello'},
    {name: 'Matt', message: 'Hi everyone'},
    {name: 'kat', message: 'Hello'},
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
