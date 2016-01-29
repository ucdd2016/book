$(document).ready(function() {
  
  //Initlize the map
  var attributionText = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>'
  
  // create a layer group to hold all the markers
  var markersLayerGroup = L.layerGroup()
  
  var Icon = L.Icon.extend({
    options: {
      iconSize:     [48, 48],
      shadowSize:   [48, 48],
      iconAnchor:   [22, 22],
    }
  });

  var clearIcon = new Icon({iconUrl: 'images/clear.png'}),
    cloudyNightIcon = new Icon({iconUrl: 'images/cloudy-night.png'}),
    rainIcon = new Icon({iconUrl: 'images/rain.png'}),
    clearNightIcon = new Icon({iconUrl: 'images/clear-night.png'}),
    cloudIcon = new Icon({iconUrl: 'images/cloud.png'}),
    cloudyIcon = new Icon({iconUrl: 'images/cloudy.png'}),
    snowIcon = new Icon({iconUrl: 'images/snow.png'});
  
  // create a firebase reference to the root
  var denverRef = new Firebase('https://publicdata-weather.firebaseio.com/denver');
  var sfRef = new Firebase('https://publicdata-weather.firebaseio.com/sanfrancisco');
  var sanDiegoRef = new Firebase('https://publicdata-weather.firebaseio.com/sandiego');
  var nyRef = new Firebase('https://publicdata-weather.firebaseio.com/newyork');
  var bostonRef = new Firebase('https://publicdata-weather.firebaseio.com/boston');
  var seattleRef = new Firebase('https://publicdata-weather.firebaseio.com/seattle');
  
  //Global Cities
  var cities = {};
      
  // read data on update
  denverRef.on('value', function(snapshot){
    updateVals(snapshot, "Denver");
  });
  sfRef.on('value', function(snapshot){
    updateVals(snapshot, "San Francisco");
  });
  sanDiegoRef.on('value', function(snapshot){
    updateVals(snapshot, "San Diego");
  });
  nyRef.on('value', function(snapshot){
    updateVals(snapshot, "New York");
  });
  bostonRef.on('value', function(snapshot){
    updateVals(snapshot, "Boston");
  });
  seattleRef.on('value', function(snapshot){
    updateVals(snapshot, "Seattle");
  });

  // initialzie the map
  var map = L.map($('#map')[0]).setView([39.50, -98.35], 4)
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: attributionText,
    maxZoom: 18,
    id: 'doubleshow.noeko77m',
    accessToken: 'pk.eyJ1IjoiZG91Ymxlc2hvdyIsImEiOiJjaWZ5Y3B1eTE1MHRidWRtMG9uZXluajg4In0.u5ONW27Ly5cU7M5KYi6Y9Q'
}).addTo(map)

  
  // add the makers layer group to the map
  markersLayerGroup.addTo(map)

//GLobal Setup Over
//---------------------------------

  
  // visualize cities on the map
  function mapCity(city, name){
    try{
    //console.log('mapCity', city)
    var latlng = [city.latitude, city.longitude]
    
    
    L.marker(latlng, {icon: getPNG(city)}).addTo(markersLayerGroup).bindPopup(name + " - " + city['currently']['summary']);
    }
    catch(err){
      console.error("err", err)
    }
  }
  
  function displayCity(city, name){
    //console.log('displayCity', city)
    
    var card = '<div class="col s4" >'
    card += '<div class="card blue-grey darken-1">' +
            '<div class="card-content white-text">' +
              '<span class="card-title">'+name+'</span>'+
              '<div class="white black-text">'+
                '<ul class="collection">'+
  
                  '<li class="collection-item">' + city['currently']['summary']+ '</li>'+
                  '<li class="collection-item">Temperature: ' + city['currently']['temperature']+ ' degrees F</li>'+
                  '<li class="collection-item">Probability of Precipitation: ' + city['currently']['precipProbability']+ '</li>'+
                  '<li class="collection-item">Cloud Cover: ' + (city['currently']['cloudCover']*100)+ '%</li>'+
                  '<li class="collection-item">Humidity: ' + city['currently']['humidity']+ '</li>'+
                  '<li class="collection-item">Visability: ' + city['currently']['visibility']+ ' miles</li>'+
                  
                '</ul>'
                '<p></p>'+
              '</div>'+
            '</div>'+
          '</div>';
    
    card += '</div>'
    $('#cities').append(card);
  }
    
//---------------------------------------------
  function updateVals(snapshot, name){
    console.log(cities)
    var city = snapshot.val()
    if( markersLayerGroup == null){
      console.warn("markersLayerGroup is null");
    }
    else{
      markersLayerGroup.clearLayers();
    }
    $('#cities').empty();
    
    //Update the citys dictionary with the new values
    cities[name] = snapshot.val();
    
    for (var key in cities) {
      if (cities.hasOwnProperty(key)) {
        console.log("Updating "+ key);
        mapCity(cities[key], key)
        displayCity(cities[key], key)
      }
    }
  }
  
  function getPNG(city){
    var icon = city['currently']['icon']
    
    if( icon == "clear-day"){
      return clearIcon;
    }
    else if( icon =="clear-night"){
      return clearNightIcon;
    }
    else if( icon =="rain" || icon == "sleet"){
      return rainIcon;
    }
    else if( icon == "snow"){
      return snowIcon;
    }
    else if( icon == "partly-cloudy-day"){
      return cloudyIcon;
    }
    else if ( icon == "partly-cloudy-night"){
      return cloudyNightIcon;
    }
    else{
      return cloudIcon;
    }
    
    
  }

})//End of namespace
