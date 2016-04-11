// a single 'data' object that holds the data of your entire app, with initial values
var userData = function() {
var match = document.cookie.match(new RegExp('user=([^;]+)'));
  if (match) return JSON.parse(match[1]);
  return null;
}();

var data = {
  center: [39.74, -104.99], // Denver
  providers: [],
  user: userData,
  needs: []
}

// a single 'handlers' object that holds all the actions of your entire app
var actions = {};

// the main render() function. call this function whenever the app's UI
// needs to to re-rendered
// 'data' and 'actions' are injected into the app
function render(){
  ReactDOM.render(
    <MyComponents.App
        data={data}
        actions={actions}/>,
    $('#app-container').get(0)
  );
}

//
// DATA
//

var firebaseRef = new Firebase('https://musictogether.firebaseio.com');

// Real-time Data (load constantly on changes)
firebaseRef.child('providers')
  .on('value', function(snapshot){

    data.providers = _.values(snapshot.val());
    render()

  })

//
// ACTIONS
//


actions.login = function(){
    firebaseRef.authWithOAuthPopup("github", function(error, authData){
        // handle the result of the authentication
        if (error) {
            console.log("Login Failed!", error);
            return;
        }
        console.log("Authenticated successfully with payload:", authData);

        // create a user object based on authData
        var user = {
            displayName: authData.github.displayName,
            name: authData.github.username,
            id: authData.github.id,
            status: 'online',
            lastActive: Date.now(),
            // position, default to the map center
            lat: 39.74,
            lon: -104.99
        };

        document.cookie = "user="+JSON.stringify(user)+"; path=/";

        var userRef = firebaseRef.child('users').child(user.name);

        // subscribe to the user data
        userRef.on('value', function(snapshot){
            data.user = snapshot.val();
            render();
        });

        // set the user data
        userRef.set(user);
    });
};

actions.logout = function(){

  if (data.user){

    firebaseRef.unauth()

    var userRef = firebaseRef
      .child('users')
      .child(data.user.name);

  document.cookie = "user=; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";

    // unsubscribe to the user data
    userRef.off()

    // set the user's status to offline
    userRef.child('status').set('offline')

    data.user = null

    render()

  }

};

