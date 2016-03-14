var _ = require('lodash');
var random_name = require('node-random-name');
var Firebase = require('firebase');
var Chance = require('chance');

// Instantiate Chance so it can be used
var chance = new Chance();

// simualate a random person entering, staying for a duration, and leaving
function simulate() {

    // generate a random person with a random name,
    // random location, and random duration
    var name = random_name();
    var chatLine = "";
    var duration = 1 + 5 * Math.random();
    var lineNumber = Math.floor((Math.random() * 10) + 1);

    chatLine +=  chance.sentence({words: 7});

    var person = {
        name: name,
        duration: duration,
        chat: chatLine,
        line_number: lineNumber,
    };

    enter(person);

    // simulate this person leaving after 'duration' seconds
    setTimeout(function() {
        leave(person);
    }, duration * 1000);
}

function enter(person) {
    console.log('enter', person);
    // Put this person in the Firebase
    char_array = [];
    for (var i = 0, len = person.chat.length; i < len; i++) {
        // console.log(person.chat[i]);
        char_array.push(person.chat[i])
    }
    console.log(char_array)
    var ref = new Firebase('https://boiling-torch-6953.firebaseio.com/users');
    ref.child(person.line_number).set({
        name: person.name,
        chat: person.chat,
        characters: char_array,
        // line_number: person.line_number,
    });
}

function leave(person) {
    console.log('leave', person);
    var ref = new Firebase('https://boiling-torch-6953.firebaseio.com/users')
    var onComplete = function(error) {
        if (error) {
            console.log('Leave Synchronization failed');
        } else {
            console.log('Leave Synchronization succeeded');
        }
    };

    ref.child(person.name).remove(onComplete);

}

function clear() {
    // TODO: remove all people from the Firebase
    var ref = new Firebase('https://boiling-torch-6953.firebaseio.com/users')
    var onComplete = function(error) {
        if (error) {
            console.log('Clear Synchronization failed');
        } else {
            console.log('Clear Synchronization succeeded');
        }
    };

    ref.remove(onComplete)
}
// clear the firebase, so that the simulation always starts from no one
clear()
    // run each second
setInterval(simulate, 2000)