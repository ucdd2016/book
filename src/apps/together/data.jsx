// a single 'data' object that holds the data of your entire app, with initial values
var city_location = {
    lat: 37.78,
    lon: -122.41
};

var radius = 0.03
var lat = city_location.lat + radius * (Math.random() - 0.5) * 2
var lon = city_location.lon + radius * (Math.random() - 0.5) * 2

var data = {
    group: localStorage.getItem('group'),
    days: [],
    day: null,
    time: [],
    list: [],
    center: [lat, lon], //
    user: null
};
console.log(data)
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
            actions={actions}
            data={data}
            chatRoomName = {data.group}/>,
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
// ACTIONS
//
actions.clickDay = function(Day){
    firebaseRef.child(data.group).child('Schedule').child(Day).on('value', function(snapshot){
        console.log(snapshot.val())
        data.day = Day
        data.time = _.keys(snapshot.val())
        data.list = _.values(snapshot.val())
        console.log(data);
        render_list()
    })
}
actions.addElement = function(date, time, budget, place, transportation, address){
    firebaseRef.child(data.group).child('Schedule').once('value', function(snapshot){
        var D = snapshot.val()
        var key = Object.keys(D)
        if (key.indexOf(date) > -1) {
            firebaseRef.child(data.group).child('Schedule').child(date).child(time).set({
                budget: budget,
                place: place,
                transportation: transportation,
                address: address
            })
        } else {
            firebaseRef.child(data.group).child('Schedule').child(date).set(
                time)
            firebaseRef.child(data.group).child('Schedule').child(date).child(time).set({
                budget: budget,
                place: place,
                transportation: transportation,
                address: address
            })
        }
    })
};

actions.foldChat = function(){
        $('#live-chat header').on('click', function() {
            $('.chat').slideToggle(300, 'swing');
            $('.chat-message-counter').fadeToggle(300, 'swing');
        });
        $('.chat-close').on('click', function(e) {
        e.preventDefault();
        $('#live-chat').fadeOut(300);
        });
};

actions.sendMessage = function(message,time){
    var messageRef=firebaseRef.child('CS_Grad_Trip').child('Message').push()
        messageRef.set({
            username: "sophyzhou",
            message: message,
            time: time
        })
}

actions.setUserLocation = function(latlng){

    if (data.user){
        ref.child(data.user.username)
            .child('pos')
            .set([latlng.lat, latlng.lng])
    }
};

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
                firebaseRef.child(data.group).child('map_markers').on('value', function(snapshot){
                    data.destinations = snapshot.val()
                    render()
                })
                render()
            })

            // set the user data
            userRef.set(user)

        }
    })

};

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

};
//read firebase

var firebaseRef = new Firebase('https://wetravel.firebaseio.com/Groups')
var ref = new Firebase('https://wetravel.firebaseio.com/Users')
var messages={};

firebaseRef.child(data.group).child('Message').on("value", function(snapshot){
    messages = snapshot.val();
    console.log(messages);
    render_nav();
    render_chatroom();
    render_footer();
    render();
})


var drawings={};

firebaseRef.child(data.group).child('drawing').on('value', function(snapshot){
    drawings = snapshot.val();
    console.log(drawings);
    render_canvas();
})


firebaseRef.child(data.group).child('Schedule').on('value',function(snapshot){
    data.days = _.keys(snapshot.val())
    render_Daybar()
})


