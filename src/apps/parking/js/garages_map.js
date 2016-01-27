function initMap(){
var ref = new Firebase('https://publicdata-parking.firebaseio.com');
      console.log("hi");
      
      var data;
      
      // read data from the location san_francisco/garages
      ref.child('san_francisco/garages').on('value', function(snapshot){
        data = snapshot.val();
      
        var garages = _.filter(data, function(d){
            return _.has(d, 'open_spaces') && d['open_spaces'] != "Unknown";
        })
      
        drawGarages(garages);
      });
      
      var attributionText = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a       href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>'
      
      // create the map
      var map = L.map($('#map')[0]).setView([37.78, -122.41], 13);
      L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
          attribution: attributionText,
          maxZoom: 18,
          id: 'doubleshow.noeko77m',
          accessToken: 'pk.eyJ1IjoiZG91Ymxlc2hvdyIsImEiOiJjaWZ5Y3B1eTE1MHRidWRtMG9uZXluajg4In0.u5ONW27Ly5cU7M5KYi6Y9Q'
      }).addTo(map);
      
      // create a layer group to hold all the markers
      var markersLayerGroup = L.layerGroup();
      // add the makers layer group to the map
      markersLayerGroup.addTo(map);
      
      var info = L.control();

      info.onAdd = function (map) {
          this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
          this.update();
          return this._div;
      };
      
      // method that we will use to update the control based on feature properties passed
      info.update = function (circle) {
        if (circle) {
          this._div.innerHTML = '<div class="card cyan lighten-2"><div class="card-content"><span class="card-title">' +
            circle.name + '</span><p>Current Rate: $' + circle.rate + '/hr</p><p>Open Spaces: ' + circle.openSpaces + '</p></div></div>';
        }
        else {
          this._div.innerHTML = '<div class="card-panel cyan lighten-2"><span>Hover over a garage to see more information</span>';
        }
      };
      
      info.addTo(map);
      
      var legend = L.control({position: 'bottomright'});

      legend.onAdd = function (map) {
        var div = L.DomUtil.create('div', 'info legend');
        div.innerHTML += '<p>Current Rates</p>';
        var grades = [0, 1, 2, 3, 4, 5];
    
        // loop through our density intervals and generate a label with a colored square for each interval
        for (var i = 0; i < grades.length; i++) {
          div.innerHTML += '<i style="background:' + getColor(grades[i]) + '"></i> $' +
            grades[i] + (grades[i + 1] ? '&ndash; $' + grades[i + 1] + '<br>' : '+');
        }
    
        return div;
      };
      
      legend.addTo(map);
      
      // visualize garages on a map
      function drawGarages(garages){
        // clear all existing markers (if any)
        markersLayerGroup.clearLayers();
      
        _.forEach(garages, function(garage){
          var points = garage.points;
          var latlng = [points[0], points[1]];
          
          var ratio = parseFloat(garage.open_spaces) / parseFloat(garage.total_spaces);
          var color = getColor(getRate(garage.rates));
      
          // create a circle layer
          var circle = L.circle(latlng, 300.0 * ratio * ratio, {
              color: color,
              fillColor: color,
              fillOpacity: 0.9
          });
          circle.name = garage.friendlyName;
          circle.openSpaces = garage.open_spaces;
          circle.rate = getRate(garage.rates);
          
          circle.on('mouseover', function() { info.update(circle); });
          circle.on('mouseout', function() { info.update(); });
      
          // add the circle layer to the makers layer group
          markersLayerGroup.addLayer(circle);
        });
      }
      
      function getColor(val) {
        return val >= 5 ? "#08589e" :
              val >= 4 ? "#2b8cbe" :
              val >= 3 ? "#4eb3d3" :
              val >= 2 ? "#7bccc4" :
              val >= 1 ? "#a8ddb5" :
              "#ccebc5";
      }
      
      function getRate(rates) {
        var d = new Date();
        var time = d.getHours();
        var where = time >= 18 ? '6:00 PM' :
                    time >= 15 ? '3:00 PM' :
                    time >= 12 ? '12:00 PM' :
                    time >= 9 ? '9:00 AM' :
                    '12:00 AM';
        var rate = _.filter(rates, function(obj) {
          return obj.BEG === where;
        });
        return parseFloat(rate[0].RATE);
      }
}