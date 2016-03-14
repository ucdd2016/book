var _ = require('lodash')
var Chance = require('chance')
var random_name = require('node-random-name');
var Firebase = require('firebase');
var ref_Group = new Firebase("https://wetravel.firebaseio.com/Groups")
var ref_User = new Firebase("https://wetravel.firebaseio.com/Users")
//get the current time for message useage
var d = new Date()
var hour = d.getHours()
var minute = d.getMinutes()
var time = hour+':'+minute

var radius = 0.03

var city_location = {
  lat: 35.74,
  lon: 40.65
}

// simualate a random person entering, staying for a duration, and leaving
function simulate(){
  // random user name
  var chance = new Chance()
  var displayName = random_name()
  var username = random_name()
  var duration = 1 + 5 * Math.random()
  var lat = 35.74 + 10*Math.random()
  var lon = 40.65 + 10*Math.random()
  var id = parseInt(100000000*Math.random())
  var pos={lat,lon}
  var user = {
    displayName: displayName,
    id: id,
    pos: pos,
    status: 'online',
    username: username
  }
  login(user)
  joinGroup(user, 'CS_Grad_Trip')

  // random message
  var message = chance.word() + " " + chance.word() + " " +chance.word()
  // random schedule
  var Day = "Day" + Math.floor(duration).toString()
  var budget = Math.random()*50+1
  var place = chance.word() + " " + chance.word()
  var startTime  = Math.floor(Math.random()*22)+1
  var endTime  = startTime+2
  var time = startTime.toString() + ':' + endTime.toString()
  var traffic = ['Rent car', 'Taxi', 'Bus', 'Metro', 'Bike', 'Walk']
  var transportation = traffic[Math.floor(Math.random()*traffic.length)]
  var schedule = {
    Day: Day,
    budget: budget,
    place: place,
    time: time,
    transportation: transportation
  }
  var map_point = {
    name: chance.word() + " " + chance.word(),
  lat: city_location.lat + radius * (Math.random() - 0.5) * 2,
    lon: city_location.lon + radius * (Math.random() - 0.5) * 2,
    message: chance.word() + " " + chance.word()
  }
  setTimeout(function(){
    chat('CS_Grad_Trip',user, message, time)
    addSchedule('CS_Grad_Trip', schedule)
    canvas('CS_Grad_Trip')
    clickOnMap('CS_Grad_Trip', map_point)
  }, duration * 1000)

  // simulate this person login
  // simulate this person logout after 'duration' seconds
  setTimeout(function(){
    removeFromMap('CS_Grad_Trip', map_point)
   }, duration * 1000)

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
      ref_User.child(user.username).update({status:online})
    }
    else{
      ref_User.child(user.username).set({
        username: user.username,
        status: user.status,
        id: user.id,
        pos: user.pos,
        displayName: user.displayName
      })
    }
  })

}


function logout(user){
  console.log('logout', user)
  ref_User.child(user.username).update({status: 'offline'});
}

function joinGroup(user, group){
  ref_Group.child(group).child('member').child(user.username).set({
        username: user.username,
        status: user.status,
        id: user.id,
        pos: user.pos,
        displayName: user.displayName
  })
}


function chat(group,user, message, time){

//   var sessionsRef = new Firebase('https://samplechat.firebaseio-demo.com/sessions/');
// var mySessionRef = sessionsRef.push();
// mySessionRef.onDisconnect().update({ endedAt: Firebase.ServerValue.TIMESTAMP });
// mySessionRef.update({ startedAt: Firebase.ServerValue.TIMESTAMP });

  console.log('chat', group,user,message,time)
  var messageRef  = ref_Group.child(group).child('Message').push();
  messageRef.set({
  message: message,
  time: Firebase.ServerValue.TIMESTAMP,
  username:user.username
  })
}

function canvas(group){
  var x = Math.floor(Math.random() * (120 + 1));
  var y = Math.floor(Math.random() * (105 + 1));
  var curColor = randColor();
  var curSize = randSize();
  var curTool = randTool();
  if(curTool == 'Eraser'){
    curColor = 'fff';
    ref_Group.child(group).child('drawing').child(x+':'+y).set({
      curColor: curColor,
      curSize : curSize,
      curTool : curTool
    })
  }else if(curTool == 'Refresh'){
    ref_Group.child(group).child('drawing').remove();
  }else{
    ref_Group.child(group).child('drawing').child(x+':'+y).set({
      curColor: curColor,
      curSize : curSize,
      curTool : curTool
    })
  }
  console.log('canvas', x, ':', y, 'color:', curColor, 'size:', curSize, 'tool:', curTool)
}


function randSize(){
  var size = [
    'Small',
    'Medium',
    'Large'
  ];
  var rand = Math.floor(Math.random()*size.length);
  return size[rand]
}

function randTool(){
  var tool = [
    'Eraser',
    'Marker',
    'Refresh'
  ];
  var rand = Math.floor(Math.random()*tool.length);
  return tool[rand]
}

function randColor(){
  var colors = ["fff","000","f00","0f0","00f","88f","f8d","f88","f05","f80","0f8","cf0","08f","408","ff8","8ff", "aed081", "eee"];

  var rand = Math.floor(Math.random()*colors.length);
  return colors[rand]
}


function addSchedule(group, schedule){
  console.log('schedule', schedule)
  ref_Group.child(group).child('Schedule').once('value', function(snapshot){
    var D = snapshot.val()
    var key = Object.keys(D)
    if (key.indexOf(schedule.Day)>-1){
      ref_Group.child(group).child('Schedule').child(schedule.Day).child(schedule.time).set({
        budget: schedule.budget,
        place: schedule.place,
        transportation: schedule.transportation
      })
    }
    else{
      ref_Group.child(group).child('Schedule').child(schedule.Day).set(
        schedule.time)
      ref_Group.child(group).child('Schedule').child(schedule.Day).child(schedule.time).set({
          budget: schedule.budget,
          place: schedule.place,
          transportation: schedule.transportation
        })
    } 
  })
}

function clickOnMap(group, map_point){
  ref_Group.child(group).child('map_markers').child(map_point.name).set({
    name: map_point.name,
    lat: map_point.lat,
    lon: map_point.lon,
    message: map_point.message
  })
}

function removeFromMap(group, map_point){
  ref_Group.child(group).child('map_markers').child(map_point.name).remove()
}
// function clickonMap()
///-------------------------------------------------------------------------
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