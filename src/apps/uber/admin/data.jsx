// a single 'data' object that holds the data of your entire app, with initial values
var data = {
  center: [40.02, -105.25], // Boulder
  drivers: [],
  users: []
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
    data.users = _.values(snapshot.val().orders)
    data.drivers = _.values(snapshot.val().driver)
    render()

  })

