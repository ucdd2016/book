// a single 'data' object that holds the data of your entire app, with initial values
var data = {
  center: [40.02, -105.25], // Boulder
  providers: [],
  user: null
}

// a single 'handlers' object that holds all the actions of your entire app
var actions = {}

// the main render() function. call this function whenever the app's UI
// needs to to re-rendered
// 'data' and 'actions' are injected into the app
function render(){
  ReactDOM.render(
    <MyComponents.App
        data={data}
        actions={actions}/>,
    $('#app-container').get(0)
  )
}

//
// DATA
//

var firebaseRef = new Firebase('https://uber-fray.firebaseio.com')

// Real-time Data (load constantly on changes)
firebaseRef.on('value', function(snapshot){
    data.providers = _.values(snapshot.val().driver)
    render()
  })

//
// ACTIONS
//

// Actions
actions.setUserLocation = function(latlng){

  if (data.user){
    firebaseRef
      .child('users')
      .child(data.user.username)
      .child('pos')
      .set([latlng.lat, latlng.lng])
      render()
      localStorage.setItem( 'lat', latlng.lat )
      localStorage.setItem( 'lon', latlng.lng )
  }
}

navigator.geolocation.getCurrentPosition(function(position) {
  var pos = [position.coords.latitude, position.coords.longitude]
  actions.login = function(){
  
  firebaseRef.authWithOAuthPopup("github", function(error, authData){

    // handle the result of the authentication
    if (error) {
      console.log("Login Failed!", error);
    } else {
      //console.log("Authenticated successfully with payload:", authData);

    
      // create a user object based on authData
      var user = {
        displayName: authData.github.displayName,
        username: authData.github.username,
        id: authData.github.id,
        status: 'online',
        pos: pos  // position, default to the map center
      }

      var userRef = firebaseRef.child('users').child(user.username)
      userRef.set(user)
      //subscribe to the user data
      userRef.on('value', function(snapshot){
        data.user = snapshot.val()
         render()
      })
      localStorage.setItem( 'lat', position.coords.latitude );
      localStorage.setItem( 'lon', position.coords.longitude );
      localStorage.setItem('name', user.username )
    }
  })

}

  });
  


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

}

