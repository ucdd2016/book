// a single 'data' object that holds the data of your entire app, with initial values
var data = {
  center: [40.006400, -105.263736], // Boulder
  providers: [],
  users: [],
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
// DATA

var firebaseRef = new Firebase('https://platano.firebaseio.com')

firebaseRef.child('providers').on('value', function(snapshot){
      data.providers = _.values(snapshot.val())
      console.log(data.providers)
      render() 
});

var firebaseRef2 = new Firebase('https://platano.firebaseio.com')

firebaseRef2.child('users').on('value', function(snapshot){
      data.users = _.values(snapshot.val())
      console.log(data.users)
      render() 
});



// Real-time Data (load constantly on changes)


// Actions
actions.setUserLocation = function(latlng){

  if (data.user){
    firebaseRef
      .child('users')
      .child(data.user.username)
      .child('pos')
      .set([latlng.lat, latlng.lng])
  }
}

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
