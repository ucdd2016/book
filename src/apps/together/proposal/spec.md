---
layout: layout.hbs
---

# Specification

# Data

Our app uses the following structure for the database backend:

* score
  * bar1
  * bar2
  * bar3
  * ...
  * timesig
    * valTop
    * valBot
* note
  * value
    * a
    * b
    * c
    * d
    * e
    * f
    * g
  * isSharp
    * true/false
  * isFlat
    * true/false
  * length
    * iswhole
      * true/false
    * isquarter
      * true/false
    * ishalf 
      * true/false
    * isRest
      * true/false
  * location 
    * 1
    * 2
    * 3
    * 4
  * User
    * color
* User
  * Active
    * Name: color
  * Inactive 
    * Name: color
* Colors
  * 1
    * Red
  * 2 
    * Blue
  * ...

# Actions

The major actions of our app are:
* Login
* Logout
* Interactability with other Users
* Update the Score
* Add bars to score


### Action: Login CONNOR


### case: login for the first time
'''
using a javascript file (such as the one provided in the Uber app)
the user can be authenticated by github
as well a user object can be created with user properties
Firebase .authWithOAuthPopup makes authenticating users very easy
'''
'''
actions.login = function(){

  firebaseRef.authWithOAuthPopup("github", function(error, authData){

    // handle the result of the authentication
    if (error) {
      console.log("Login Failed!", error);
    } else {
      console.log("Authenticated successfully with payload:", authData);

      // create a user object based on authData
      var user = {
        displayName: authData.github.displayName,
        username: authData.github.username,
        id: authData.github.id,
        status: 'online',
        pos: data.center  // position, default to the map center
      }

      var userRef = firebaseRef.child('users').child(user.username)

      // subscribe to the user data
      userRef.on('value', function(snapshot){
        data.user = snapshot.val()
        render()
      })

      // set the user data
      userRef.set(user)

    }
  })

}
'''

### case: keep login-ed status even when window is closed 
'''
Using this data object 'user', the user can remained logged in.
As long as the user's 'status' attribute is set to online, they will remain logged in.
Only when a user logs out, will their status be changed to 'offline'
'''
'''
      // create a user object based on authData
      var user = {
        displayName: authData.github.displayName,
        username: authData.github.username,
        id: authData.github.id,
        status: 'online',
        pos: data.center  // position, default to the map center
      }
'''


## Action: Logout CONNOR

### case: logout when button is toggeled
'''
Similiar to login, our app will utulize Firebase's log out template code
As well, when a user log's out, "userRef.child('status').set('offline')" will change the user's status to 'offline'.
'''
actions.logout = function(){

  if (data.user){

    firebaseRef.unauth()

    var userRef = firebaseRef
      .child('users')
      .child(data.user.username)

    // unsubscribe to the user data
    userRef.off()

    // set the user's status to offline
    userRef.child('status').set('offline')

    data.user = null

    render()

  }

### case: stay logged out when window is closed and re-opened
'''
By implementing the code below, a user's status will remain 'offline' until they 'login' again.
Even when the user closes the window and re enters the app, their status will remain 'offline' (logged out) until they click 'login'.
'''
    // set the user's status to offline
    userRef.child('status').set('offline')
'''



## Action: Interactability with other Users STEVEN

### case: chat box opens when clicked
``` javascript
button.onclick
{
  chatRef.onAuth:
  if auth:
	chat enable
  else
	error
}

chat enable {
 chat = new Firechat(firebaseRef, options)
 this.roomQueue = [];
 this.user = user;
 this.userName = userName;
 this.sessionId = sessionReference; 
}

### case: invite users to chat room
``` javascript
send Invite onclick{
 inviteRef = firebase user ref;
 if (!authenticated){
   return err;
 }
 if (roomtype){
   authorizedUser.set(true, roomId);
 }
 inviteRef.set(id, fromUser, roomId, toUser);
}

acceptInvite {
   inviteRef = snapshot.val();
   enterRoom(invite.roomId);
   inviteRef.setstatus = accepted;
   inviteRef.userName = username;
}

declineInvite {
   inviteRef = snapshot.val();
   inviteRef.setstatus = declined;
   inviteRef.userName = username;   
}

## Action: Update Score

### Case: Add Note
``` javascript
//given
foo.bar.score is
{
  'score':'note',
    "isFlat" : [ false ],
    "isSharp" : [ true ],
    "length" : {
      "isHalf" : [ true ],
      "isQuarter" : [ false ],
      "isWhole" : [ false ]
    },
    "location" : [1],
    "value" : ["e"]
}

//when
add_note(flat, not sharp, half, location)

foo.bar.score is

{
  'score':'note',
    "isFlat" : [ false ],
    "isSharp" : [ true ],
    "length" : {
      "isHalf" : [ true ],
      "isQuarter" : [ false ],
      "isWhole" : [ false ]
    },
    "location" : [1],
    "value" : ["e"]
}

{
  'score':'note',
    "isFlat" : [ true ],
    "isSharp" : [ false ],
    "length" : {
      "isHalf" : [ true ],
      "isQuarter" : [ false ],
      "isWhole" : [ false ]
    },
    "location" : [3],
    "value" : ["f"]
}

### Case: Remove Note
``` javascript
//given
foo.bar.score is
{
  'score':'note',
    "isFlat" : [ false ],
    "isSharp" : [ true ],
    "length" : {
      "isHalf" : [ true ],
      "isQuarter" : [ false ],
      "isWhole" : [ false ]
    },
    "location" : [1],
    "value" : ["e"]
}

{
  'score':'note',
    "isFlat" : [ true ],
    "isSharp" : [ false ],
    "length" : {
      "isHalf" : [ true ],
      "isQuarter" : [ false ],
      "isWhole" : [ false ]
    },
    "location" : [3],
    "value" : ["f"]
}

//when
remove_note(flat, not sharp, half, location)

foo.bar.score is

{
  'score':'note',
    "isFlat" : [ false ],
    "isSharp" : [ true ],
    "length" : {
      "isHalf" : [ true ],
      "isQuarter" : [ false ],
      "isWhole" : [ false ]
    },
    "location" : [1],
    "value" : ["e"]
}


## Action: Add bars to score BROOKE

### case: when button clicked updates the number of bars by one

``` javascript

//given
foo.bar.score is
{ 
 "score" : {
    "bar1" : 1,
    "timeSig" : {
      "bottom" : 4,
      "top" : 4
    }
  },
}

//button action to add another bar
//when
button_clicked()

foo.bar.score is
{
  "score" : {
    "bar1" : 1,
    "bar2" : 2,
    "timeSig" : {
      "bottom" : 4,
      "top" : 4
    }
  },
}


### case: all other users can see update in real time

## we will use code that will subscribe to the changes in firebase, that way all users can see changes made others to the firebase.


