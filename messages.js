$(() => {
    $("#send").click(() => {
        addMessages({name: 'Time', message: 'hello'});
    })
    getMessages();
})

function addMessages(message){
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
        data.forEach(addMessages);
    })
}