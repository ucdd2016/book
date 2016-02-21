
const {Map, Marker, CircleMarker, Popup, TileLayer, MapLayer}  = window.ReactLeaflet

class MapView extends React.Component {
  render(){
    //console.log(this.props)
    var driver = L.icon({
        iconUrl: 'person.png',
        iconSize: [20, 20],   
    })
    var user = L.icon({
        iconUrl: 'rest.png',
        iconSize: [20, 20],   
    })

  var drivers = this.props.providers.map(function(p, i){
    var pos = [p.lat,p.lon]
    return(
      <Marker position={pos} icon={driver}>
        <Popup>
          <p>{p.name}</p>      
        </Popup>
      </Marker>
    );
  })

  if (this.props.user != null){
    return (
        <div className="col m10" id="map" className="card-panel deep-orange lighten-1">
        <div className="icon-block">
        <Map center={this.props.center} zoom={13} onLeafletClick={this.handleLeafletClick.bind(this)}>
          <TileLayer
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'/>
          {drivers}
          <Marker position={this.props.user.pos} icon={user}>
            <Popup>
              <p>{this.props.user.username}</p>      
            </Popup>
          </Marker>
        </Map>
        </div>
        </div>
    );
  }
  else{
    return (
        <div className="col m10" id="map" className="card-panel deep-orange lighten-1">
        <div className="icon-block">
        <Map center={this.props.center} zoom={13} onLeafletClick={this.handleLeafletClick.bind(this)}>
          <TileLayer
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'/>
          {drivers}
        </Map>
        </div>
        </div>
    );
  }
  }
  handleLeafletClick(event){
    //console.log('leaflet click event', event)
    this.props.setUserLocationAction(event.latlng)
  }
}
MyComponents.MapView = MapView
