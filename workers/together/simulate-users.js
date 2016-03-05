var _ = require('lodash')
var Chance = require('chance')
var random_name = require('node-random-name');
var Firebase = require('firebase');
//var ref_Group = new Firebase("https://wetravel.firebaseio.com/Groups")
var ref_User = new Firebase("https://wetravel.firebaseio.com/Users")
//get the current time
var d = new Date()
var hour = d.getHours()
var minute = d.getMinutes()
var time = hour+':'+minute

// simualate a random person entering, staying for a duration, and leaving
function simulate(){
  // pick a random in firebase, and duratio
  var chance = new Chance()
  var name = random_name()
  var duration = 1 + 5 * Math.random()
  var user = {
    name: name,
    status: 'online'
  }
   login(user)
  //var groupName = chance.word() + " " + chance.word()
  //duration = 1 + 5 * Math.random()


  // simulate this person login
  // simulate this person logout after 'duration' seconds
   setTimeout(function(){
    logout(user)
   }, duration * 1000)

}

function login(user){
  console.log('login', user)
  ref_User.once('value', function(snapshot){
    var users = snapshot.val()
    users = Object.keys(users)
    if (user in users){
      ref_User.child(user.name).update({status:online})
    }
    else{
      ref_User.child(user.name).set({
        name: user.name,
        status: user.status
      })
    }
  })
  
}

function logout(user){
  console.log('logout', user)
  ref_User.child(user.name).update({status: 'offline'});
}

// function Make_Group(groupName, key, userName){

//   ref_Group.child(groupName).set({
//     GroupName: groupName
//     Activation_key: key
//     Message: {
//       time: "Welcome to "+groupName
//     }
//     member: {
//       userName: userName
//       current_status: online
//     }
//   })
// }
// function Join_Group(groupName, key, userName){
//   ref_Group.child(groupName).child(Activation_key).once('value',function(snapshot){
//     var gold_answer = snapshot.value()
//   })
//   if(key != gold_answer){
//     alert('wrong password')
//   }
//   else{
//     ref_Group.child(groupName).child(member).child(userName).set({
//       userName: userName
//       current_status: online
//     })
//     if (ref_User.child(userName).child('groups')!=null){
//       ref_User.child(userName).child('groups').once('value',function(snapshot){
//         var key = snapshot.val()
//         key.push(groupName)
//         ref_User.child(userName).child('groups').set(key)
//       })
//     }
//     else{
//       ref_User.child(userName).child('groups').set([groupName])
//     }
    
// }



// run each second
setInterval(simulate, 2000)