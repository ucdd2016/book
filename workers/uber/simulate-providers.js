var _ = require('lodash')
var Chance = require('chance')
var random_name = require('node-random-name');
var Firebase = require('firebase');
var ref_order = new Firebase("https://uber-fray.firebaseio.com/orders")
var ref_driver = new Firebase("https://uber-fray.firebaseio.com/driver")

// San Francisco
var city_location = {
  lat: 40.02,
  lon: -105.25
}

var radius = 0.03

// simualate a random person entering, staying for a duration, and leaving
function simulate(){

  // generate a random person with a random name,
  // random location, and random duration
  var chance = new Chance()

  var name = random_name()
  var duration = 1 + 5 * Math.random()
  var lat = city_location.lat + radius * (Math.random() - 0.5) * 2
  var lon = city_location.lon + radius * (Math.random() - 0.5) * 2
  
  var driver = {
    name: name,
    duration: duration,
    lat: lat,
    lon: lon
  }

  var restaurant_name = chance.word() + " " + chance.word()
  duration = 1 + 5 * Math.random()
  lat = city_location.lat + radius * (Math.random() - 0.5) * 2
  lon = city_location.lon + radius * (Math.random() - 0.5) * 2
  var delivery_location = chance.address()
  var order_amount = Math.floor(Math.random() * (20 - 10 + 1) + 10)
  var driver_amount = Math.floor(Math.random() * (7 - 3 + 1) + 3)
  var delivery_time = Math.floor(Math.random() * (10 - 3 + 1) + 3)


  var order = {
    restaurant_name: restaurant_name,
    duration: duration,
    lat: lat,
    lon: lon,
    delivery_location: delivery_location,
    order_amount: order_amount,
    driver_amount: driver_amount,
    delivery_time: delivery_time
  }

  // simulate this person entering
  enter_order(order)
  enter_driver(driver)

  // simulate this person leaving after 'duration' seconds
  setTimeout(function(){
    leave_driver(driver)
    leave_order(order)
  }, duration * 1000)

}

function enter_driver(driver){
  console.log('enter', driver)
  ref_driver.child(driver.name).set({
    name: driver.name,
    lat: driver.lat,
    lon: driver.lon
  });
}

function enter_order(order){
  console.log('enter', order)
  ref_order.child(order.restaurant_name).set({
   restaurant_name: order.restaurant_name,
   duration: order.duration,
   lat: order.lat,
   lon: order.lon,
   delivery_location: order.delivery_location,
   order_amount: order.order_amount,
   driver_amount: order.driver_amount,
   delivery_time: order.delivery_time
 });
}

function leave_driver(driver){
  console.log('leave', driver)
  ref_driver.child(driver.name).remove();
}

function leave_order(order){
  console.log('leave', order)
  ref_order.child(order.restaurant_name).remove();
}



// run each second
setInterval(simulate, 2000)
