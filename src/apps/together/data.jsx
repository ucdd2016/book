// a single 'data' object that holds the data of your entire app, with initial values
var city_location = {
    lat: 37.78,
    lon: -122.41
};

var radius = 0.03;
var lat = city_location.lat + radius * (Math.random() - 0.5) * 2;
var lon = city_location.lon + radius * (Math.random() - 0.5) * 2;

var data = {
    group: localStorage.getItem('group'),
    days: [],
    day: null,
    time: [],
    list: [],
    center: [lat, lon], //
    user: null
};
console.log(data);
// a single 'handlers' object that holds all the actions of your entire app
var actions = {};
// several main render function
function render_nav(){
    ReactDOM.render(
        <MyComponents.NavBar
            data={data}
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

function render_Daybar(){
    ReactDOM.render(
        <MyComponents.Day
            data={data}
            actions={actions}/>,
        $('#day-bar').get(0)
    )
}
function render_form(){
    ReactDOM.render(
        <MyComponents.Form
            data={data}
            actions={actions}/>,
        $('#form').get(0)
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
            drawings={drawings}
            groupName = {data.group}/>,
        $('#canvas').get(0)
    );
}
// ACTIONS
actions.clickDay = function(Day){
    firebaseRef.child(data.group).child('Schedule').child(Day).on('value', function(snapshot){
        console.log(snapshot.val());
        data.day = Day;
        data.time = _.keys(snapshot.val());
        data.list = _.values(snapshot.val());
        console.log(data);
        render_list()
    })
};
actions.addElement = function(date, time, budget, place, transportation, address){
        firebaseRef.child(data.group).child('Schedule').child(date).child(time).set({
            budget: budget,
            place: place,
            transportation: transportation,
            address: address
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
    var messageRef=firebaseRef.child(data.group).child('Message').push()
    if(message!=""){
        messageRef.set({
            username: localStorage.getItem('username'),
            message: message,
            time: time
        })
    }else{
        Materialize.toast('Please enter your message', 3000, 'rounded')
    }
};

actions.draw = function(curColor,curSize){
        //Create a reference to the pixel data for our drawing.
        var pixelDataRef = new Firebase('https://wetravel.firebaseio.com/Groups/'+data.group+'/drawing');
        //var pixelDataRef = new Firebase('https://wetravel.firebaseio.com/Groups/CS_Grad_Trip/drawing');

        var mapRef = new Firebase('https://wetravel.firebaseio.com/Groups/'+data.group+'/Map');

        // Set up our canvas
        var myCanvas = document.getElementById('drawing-canvas');
        var myContext = myCanvas.getContext ? myCanvas.getContext('2d') : null;
        if (myContext == null) {
            alert("You must use a browser that supports HTML5 Canvas to run this demo.");
            return;
        }
        var outlineImage = new Image();
        outlineImage.onload = function() {
            myContext.drawImage(outlineImage, 0, 0, 480, 420);
        };
        mapRef.on('value',function(snapshot) {
            var mapurl = snapshot.val();
            outlineImage.src = mapurl;
        });
        //Keep track of if the mouse is up or down
        myCanvas.onmousedown = function () {mouseDown = 1;};
        myCanvas.onmouseout = myCanvas.onmouseup = function () {
            mouseDown = 0; lastPoint = null;
        };
        var drawLineOnMouseMove = function(e) {
            if (!mouseDown) return;
            e.preventDefault();
            var offset = $('canvas').offset();
            var x1 = Math.floor((e.pageX - offset.left) / pixSize - 1),
                y1 = Math.floor((e.pageY - offset.top) / pixSize - 1);
            var x0 = (lastPoint == null) ? x1 : lastPoint[0];
            var y0 = (lastPoint == null) ? y1 : lastPoint[1];
            var dx = Math.abs(x1 - x0), dy = Math.abs(y1 - y0);
            var sx = (x0 < x1) ? 1 : -1, sy = (y0 < y1) ? 1 : -1, err = dx - dy;
            while (true) {
                if(currentColor=="fff"){
                    pixelDataRef.child(x0 + ":" + y0).set(null);
                }else{
                    pixelDataRef.child(x0 + ":" + y0).set({curColor: curColor,
                        curSize : curSize});
                }
                if (x0 == x1 && y0 == y1) break;
                var e2 = 2 * err;
                if (e2 > -dy) {
                    err = err - dy;
                    x0 = x0 + sx;
                }
                if (e2 < dx) {
                    err = err + dx;
                    y0 = y0 + sy;
                }
            }
            lastPoint = [x1, y1];
        };
        $(myCanvas).mousemove(drawLineOnMouseMove);
        $(myCanvas).mousedown(drawLineOnMouseMove);

        var drawPixel = function(snapshot) {
            var coords = snapshot.key().split(":");
            var object = snapshot.val();
            myContext.fillStyle = "#" + object.curColor;
            var radius = object.curSize;
            myContext.fillRect(parseInt(coords[0]) * radius, parseInt(coords[1]) * radius, radius, radius);
        };
        var clearPixel = function(snapshot) {
            var coords = snapshot.key().split(":");
            var object = snapshot.val();
            var radius = object.curSize;
            myContext.clearRect(parseInt(coords[0]) * radius, parseInt(coords[1]) * radius, radius, radius);
        };
        pixelDataRef.on('child_added', drawPixel);
        pixelDataRef.on('child_changed', drawPixel);
        pixelDataRef.on('child_removed', clearPixel);
};


actions.setUserLocation = function(latlng){

    if (data.user){
        ref.child(data.user.username)
            .child('pos')
            .set([latlng.lat, latlng.lng])
    }
};

//read firebase
var firebaseRef = new Firebase('https://wetravel.firebaseio.com/Groups');
var ref = new Firebase('https://wetravel.firebaseio.com/Users');
render_nav();
render_form();
var messages={};
//update the chatroom when there are message updates
firebaseRef.child(data.group).child('Message').on("value", function(snapshot){
    messages = snapshot.val();
    console.log(messages);
    render_chatroom();
    render();
});


var drawings={};
firebaseRef.child(data.group).child('drawing').on('value', function(snapshot){
    drawings = snapshot.val();
    console.log(drawings);
    render_canvas();
    render();
});


firebaseRef.child(data.group).child('Schedule').on('value',function(snapshot){
    data.days = _.keys(snapshot.val());
    render_Daybar()
});


