function initList(){
  // create a firebase reference to the root
  var ref = new Firebase('https://publicdata-parking.firebaseio.com');

  var data

  // read data from the location san_francisco/garages, only once
  ref.child('san_francisco/garages').once('value', function(snapshot){
    data = snapshot.val()
    console.log('data is loaded', data)

    // filter the data
    var garages = _.filter(data, function(d){
      // keep only those values (d) that has "open_spaces" as a field
      return _.has(d, 'open_spaces')
    })

    displayGarages(garages)
  })
}
function displayGarages(garages){
  // lodash _.forEach https://lodash.com/docs#forEach
  _.forEach(garages, function(val, key){
    $('#garages').append('<li class="collection-item">Hello:' + val['friendlyName'] + '</li>')
  })
}