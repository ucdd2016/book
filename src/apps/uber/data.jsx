// a single 'data' object that holds the state of your entire app
var data = {}

// Static Data (data that won't change ever)

// San Francisco
data.center = [37.78, -122.41];

var root = new Firebase('https://ucdd2-book.firebaseio.com/uber')

// Dyanmic Data (load once)
root.child('team')
  .once('value', function(snapshot){

    data.team = _.values(snapshot.val())

    ReactDOM.render(
      <MyComponents.App data={data}/>,
      $('#app-container').get(0)
    )
  })


// Real-time Data (load constantly on changes)
root.child('providers')
  .on('value', function(snapshot){

    data.providers = _.values(snapshot.val())

    ReactDOM.render(
      <MyComponents.App data={data}/>,
      $('#app-container').get(0)
    )

  })
