function loadCitiesData(){
  
  // create a firebase reference to the root
  var weatherRef = new Firebase('https://publicdata-weather.firebaseio.com/austin');

  var data

  // read data from only once
  weatherRef.once('value', function(snapshot){
    var city = snapshot.val()
    mapCity(city)
    displayCity(city, 'austin')
  })

  var attributionText = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>'

  // initialzie the map
  var map = L.map($('#map')[0]).setView([39.50, -98.35], 4)
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: attributionText,
    maxZoom: 18,
    id: 'doubleshow.noeko77m',
    accessToken: 'pk.eyJ1IjoiZG91Ymxlc2hvdyIsImEiOiJjaWZ5Y3B1eTE1MHRidWRtMG9uZXluajg4In0.u5ONW27Ly5cU7M5KYi6Y9Q'
}).addTo(map)

  // create a layer group to hold all the markers
  var markersLayerGroup = L.layerGroup()
  // add the makers layer group to the map
  markersLayerGroup.addTo(map)
  
  function displayCity(city, name){
    console.log('displayCity', city)
    $('#cities').append('<li class="collection-item">' + name +
      ' humidity = ' +
      JSON.stringify(city.currently) + '</li>')
  }

  // visualize cities on the map
  function mapCity(city){
    console.log('mapCity', city)
    var latlng = [city.latitude, city.longitude]
    var circle = L.circle(latlng, 10, {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5
    }).bindLabel('Austin')
  
    markersLayerGroup.addLayer(circle)
  }
}
