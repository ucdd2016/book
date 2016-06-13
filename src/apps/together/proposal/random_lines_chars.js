var _ = require('lodash');
var random_name = require('node-random-name');
var Firebase = require('firebase');
var Chance = require('chance');
var Firepad = require('firepad');

// Instantiate Chance so it can be used
var chance = new Chance();
var RootFirebase = 'https://glowing-heat-5994.firebaseio.com';
var firebaseURL = RootFirebase + '/users';

// simualate a random person entering, staying for a duration, and leaving
function simulate() {

    // generate a random person with a random name,
    // random location, and random duration
    var name = random_name();
    var chatLine = "";
    var duration = 1 + 5 * Math.random();
    chatLine +=  chance.sentence({words: 7});

    var person = {
        name: name,
        duration: duration,
        chat: chatLine,
        id: Math.floor(Math.random() * 10)
    };

    enterText(person, chatLine);

    // simulate this person leaving after 'duration' seconds
    setTimeout(function() {
        leave(person);
    }, duration * 1000);
}

function enter(person, pos) {
    console.log('enter', person);
    // Put this person in the Firebase
    char_array = [];
    for (var i = 0, len = person.chat.length; i < len; i++) {
        char_array.push(person.chat[i])
    }
    var ref = new Firebase(firebaseURL);
    ref.child(person.id).set({
        name: person.name,
        chat: person.chat,
        characters: char_array,
        color: '#'+Math.floor(Math.random()*16777215).toString(16),
        cursor: {
            position: pos,
            selectionEnd: pos
        }
    });
}

function enterText(person, newLine, line){
    var headless = new Firepad.Headless(RootFirebase);
    newLine += "\n";
    headless.getText(function(text){
        var pos = Math.floor(Math.random() * text.length);
        while (text[pos] != "\n" && pos < text.length) {
            pos = pos + 1;
        };
        pos = pos + 1;
        var chars = text.split('');
        chars.splice(pos, 0, newLine);
        text = chars.join('');
        headless.setText(text, function(){
            enter(person, pos);
        });
    });
}

function leave(person) {
    console.log('leave', person);
    var ref = new Firebase(firebaseURL)
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
    var ref = new Firebase(firebaseURL)
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
