// a single 'data' object that holds the data of your entire app, with initial values
var city_location = {
    lat: 37.78,
    lon: -122.41
}

var radius = 0.03
var lat = city_location.lat + radius * (Math.random() - 0.5) * 2
var lon = city_location.lon + radius * (Math.random() - 0.5) * 2

var data = {
    center: [lat, lon], //
    user: null
}

// a single 'handlers' object that holds all the actions of your entire app
var actions = {}

// the main render() function. call this function whenever the app's UI
// needs to to re-rendered
// 'data' and 'actions' are injected into the app
function render_nav(){
    ReactDOM.render(
        <MyComponents.NavBar
            actions={actions}/>,
        $('#nav-bar').get(0)
    )
}

function render(){
    ReactDOM.render(
        <MyComponents.App
            data={data}
            actions={actions}/>,
        $('#app-container').get(0)
    )
}

function render_footer(){
    ReactDOM.render(
        <MyComponents.Footer
            actions={actions}/>,
        $('#footer').get(0)
    )
}

function render_chatroom() {
    ReactDOM.render(
        <MyComponents.Chatroom
            messages={messages}
            chatRoomName = {chatRoomName}/>,
        $('#chatroom').get(0)
    );
}

function render_canvas() {
    ReactDOM.render(
        <MyComponents.Canvas
            drawings={drawings}/>,
        $('#canvas').get(0)
    );
}
//read firebase

var firebaseRef = new Firebase('https://wetravel.firebaseio.com/Groups')
var ref = new Firebase('https://wetravel.firebaseio.com/Users')

var chatRoomName = "CS_Grad_Trip";
var messages={};

firebaseRef.child(chatRoomName).child('Message').on("value", function(snapshot){
    messages = snapshot.val();
    console.log(messages);
    render_chatroom();
    render_nav();
    render_footer();
    render();
})


var drawings={};

firebaseRef.child(chatRoomName).child('drawing').on('value', function(snapshot){
    drawings = snapshot.val();
    console.log(drawings);
    render_canvas();
})

// ACTIONS
//

actions.setUserLocation = function(latlng){

    if (data.user){
        ref
            .child(data.user.username)
            .child('pos')
            .set([latlng.lat, latlng.lng])
    }
}

actions.login = function(){

    ref.authWithOAuthPopup("github", function(error, authData){

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

            var userRef = ref.child(user.username)

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

        ref.unauth()

        var userRef = ref
            .child(data.user.username)

        // unsubscribe to the user data
        userRef.off()

        // set the user's status to offline
        userRef.child('status').set('offline')

        data.user = null

        render()

    }

}