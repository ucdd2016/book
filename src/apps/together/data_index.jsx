// a single 'data' object that holds the data of your entire app, with initial values
var data = {
    group: null,
    user: null
};

// a single 'handlers' object that holds all the actions of your entire app
var actions = {};

// the main render() function. call this function whenever the app's UI
// needs to to re-rendered
// 'data' and 'actions' are injected into the app
function render_nav(){
    ReactDOM.render(
        <MyComponents.NavBar
            data={data}
            actions={actions}/>,
        $('#nav-bar').get(0)
    )
}
function render_group(){
    ReactDOM.render(
        <MyComponents.Groups
            data={data} />,
        $('#group').get(0)
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

//read firebase
var firebaseRef = new Firebase('https://wetravel.firebaseio.com/Groups')
var ref = new Firebase('https://wetravel.firebaseio.com/Users')

// ACTIONS
actions.login = function(){
    ref.authWithOAuthPopup("github", function(error, authData){

        // handle the result of the authentication
        if (error) {
            console.log("Login Failed!", error);
        }
        else {
            console.log("Authenticated successfully with payload:", authData);

            // create a user object based on authData
            var user = {
                displayName: authData.github.displayName,
                username: authData.github.username,
                id: authData.github.id,
                status: 'online'
            };
            data.user = user.username;
            render_nav()
            render_form()
            localStorage.setItem( 'username', data.user)
            ref.child(user.username).set(user)
            firebaseRef.on('value', function(snapshot){
                data.group = _.keys(snapshot.val())
                 render_group()
            });
        }
    });
}

actions.logout = function(){

    if (data.user){

        ref.unauth()


        var userRef = ref.child(data.user)
        // unsubscribe to the user data
        userRef.off()

        // set the user's status to offline
        userRef.child('status').set('offline')

        data.user = null
        data.group = null
        render_nav()
        $('#group').empty()

    }

}
actions.makeGroup = function(groupName, time){
    var groups;
    firebaseRef.once('value',function(snapshot){
        groups = _.keys(snapshot.val());
    })
    console.log(groups);
    if (groups.indexOf(groupName)==-1){
        Materialize.toast('group established', 1000)
        firebaseRef.child(groupName).set({
            GroupName: groupName,
            Message: {
                rgrtrbvcfgyht: {
                    time: time,
                    message: "welcome to " + groupName,
                    username: 'system'
                }
            },
            Map:'http://maps.google.com/maps/api/staticmap?markers=ca&size=480x420&sensor=true'
        })
    }
    else {
        Materialize.toast('this group name already exists', 1000)
    }
}
render_nav()