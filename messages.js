var socket = io();
$(() => {

    $("#send").click(() => {
        var message = { name: $("#name").val(), message: $("#message").val()}
        postMessage(message);
        // addMessages({name: 'Time', message: 'hello'});
    })
    getMessages();
})

socket.on('message', addMessage);

function addMessage(message){
    $("#messages").append
    (`<h4>${message.name} </h4> 
    <p> ${message.message} </p>`
)}

function getMessages(){
    // $.get('http://localhost:4550/messages', (data) => {
    //   data.forEach(function(element){
    //       addMessages(element)
    //        },this);
    // })

    $.get('http://localhost:4550/messages', (data) => {
        data.forEach(addMessage);
    })
}

function postMessage(message){
    $.post('http://localhost:4550/messages', message)

}