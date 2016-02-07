// a single 'data' object that holds the data of your entire app
var data = {}

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

// Static Data (data that won't change ever)

// San Francisco
data.center = [37.78, -122.41];

var firebaseRef = new Firebase('https://ucdd2-book.firebaseio.com/uber')

// Dyanmic Data (load once)
firebaseRef.child('team')
  .once('value', function(snapshot){

    data.team = snapshot.val()

    render()

  })


// Real-time Data (load constantly on changes)
firebaseRef.child('providers')
  .on('value', function(snapshot){

    data.providers = _.values(snapshot.val())

    render()

  })

// User data (initialized to null, which will be set after authentication)
data.user = null

//
// ACTIONS
//

// Actions
actions.setUserLocation = function(latlng){
  console.log(latlng)

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

      // console.log('user', user)

      var userRef = firebaseRef.child('users').child(user.username)

      userRef.on('value', function(snapshot){
        data.user = snapshot.val()
        console.log('data.user', data.user)
        render()
      })

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

    userRef.off()

    userRef.child('status').set('offline')

    data.user = null

    render()

  }
  
}
