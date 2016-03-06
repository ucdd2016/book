var _ = require('lodash')
var random_name = require('node-random-name');
var Firebase = require('firebase');

var firebaseURL = "https://wetravel.firebaseio.com/"
var radius = 0.03
var drivers={};


function randChatroom(){
    var chatrooms = [
        'Work',
        'School',
        'UCDD2',
        'Travel'
    ];
    var rand = Math.floor(Math.random()*chatrooms.length);
    return chatrooms[rand]
}

function randMessages(){
    var messages = [
        'Hi whats up',
        "Nothing much",
        "How is your day going",
        "Good How about yours",
        "We have alot of random typing",
        "These messages make no sense",
        "My iphone is broken",
        "Graduation is soon",
        "I have a big teddy bear",
        "So do I",
        "Please dont say anything stupid",
        "I hope I get an A in this class",
        "Me too"
    ];
    
    var rand = Math.floor(Math.random()*messages.length);   
    return messages[rand];
}

// simualate a random person entering, staying for a duration, posting, and leaving
function simulate(){
    var name = random_name()

    var person = {
        name: name,
        isBlocked: 1,
        userName: name,
        currentlyTyping: 0,
        isBlocked: 0,
        isAdmin: 0
    };

    login(person);

    setTimeout(function(){
        var ref = new Firebase(firebaseURL);
        var chatRef = ref.child("chatrooms/"+ randChatroom() + "/chats");
        var messageRef = chatRef.push();
        
        messageRef.set({
            text: randMessages(), 
            score: 0, 
            userName: person.name,
            attachment: 0
        });

        setTimeout(function(){
            logout(person);
        }, 1000);
    }, 1000);
}


function login(person){
  console.log('login', person)
  var ref = new Firebase(firebaseURL);
  var usersRef = ref.child("users");
  usersRef.child(person.name).set({
    name: person.name,
    isBlocked: 1,
    userName: person.name,
    currentlyTyping: 0,
    isBlocked: 0,
    isAdmin: 0
    });

}

function logout(person){
  console.log('logout', person)  
  var ref = new Firebase(firebaseURL+"/users/"+person.name);
  ref.remove();
}

function clear(){ 
  var ref = new Firebase(firebaseURL);
  ref.remove();
    console.log("\n\nClearing Database\n\n")
}

//This is so we always start fresh
clear();

// run every half second
setInterval(simulate, 1000);
setInterval(clear, 10000000); //Clear the database out every 100000 seconds
