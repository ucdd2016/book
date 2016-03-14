// a single 'data' object that holds the data of your entire app, with initial values
var city_location = {
    lat: 37.78,
    lon: -122.41
}

var radius = 0.03
var lat = city_location.lat + radius * (Math.random() - 0.5) * 2
var lon = city_location.lon + radius * (Math.random() - 0.5) * 2

var data = {
    days: [],
    day: null,
    time: [],
    list: [],
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
function render_Daybar(){
    ReactDOM.render(
        <MyComponents.Day
            data={data}
            actions={actions}/>,
        $('#day-bar').get(0)
    )
}
function render_list(){
    ReactDOM.render(
        <MyComponents.List
            data={data}
            actions={actions}/>,
        $('#list').get(0)
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
    ReactDoM.render(
        <MyComponents.Canvas
            actions={actions}/>,
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
    render_nav();
    render_chatroom();
    render_footer();
    render();
})
firebaseRef.child('CS_Grad_Trip').child('Schedule').on('value',function(snapshot){
    data.days = _.keys(snapshot.val())
    render_Daybar()
})
firebaseRef.child('CS_Grad_Trip').child('Page').on('value',function(snapshot){
    var num = snapshot.val()
    var Day = 'Day'+num
    console.log(Day)
    firebaseRef.child('CS_Grad_Trip').child('Schedule').child(Day).on('value', function(childsnapshot){
        data.day = Day
        data.time = _.keys(childsnapshot.val())
        data.list = _.values(childsnapshot.val())
        console.log(data)
        render_list()
    })
})
// ACTIONS
//
actions.setCanvas = function(){
    firebaseRef

}

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

        var userRef = firebaseRef
            .child(data.user.username)

        // unsubscribe to the user data
        userRef.off()

        // set the user's status to offline
        userRef.child('status').set('offline')

        data.user = null

        render()

    }

}