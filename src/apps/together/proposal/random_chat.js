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

    chatLine +=  chance.sentence({words: 7});

    var person = {
        name: name,
        duration: duration,
        chat: chatLine
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
    var ref = new Firebase('https://hello-jtresman.firebaseio.com/users');
    ref.child(person.name).set({
        name: person.name,
        chat: person.chat
    });
}

function leave(person) {
    console.log('leave', person);
    var ref = new Firebase('https://hello-jtresman.firebaseio.com/users')
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
    var ref = new Firebase('https://hello-jtresman.firebaseio.com/users')
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