
const {Map, Marker, CircleMarker, Popup, TileLayer, MapLayer}  = window.ReactLeaflet

class MapView extends React.Component {
  render(){
    console.log(this.props)
    var order = L.icon({
        iconUrl: 'rest.png',
        iconSize: [20, 20],   
    })
    var driver = L.icon({
        iconUrl: 'person.png',
        iconSize: [20, 20],   
    })
  
  var orders = this.props.providers.map(function(p, i){
    var pos = [p.lat,p.lon]
    return(
      <Marker position={pos} icon={order}>
        <Popup>
          <div className="card-panel deep-orange lighten-1">
            <span className="card-title white-text"><h4>{p.restaurant_name}</h4></span>
            <div className="card-content">
              <p>Delivery location: {p.delivery_location}</p>
              <p>Order amount: ${p.order_amount}</p>
              <p>Time: {p.delivery_time} minutes</p>
          </div>
        </div>      
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
          {orders}
          <Marker position={this.props.user.pos} icon={driver}>
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
          {orders}
        </Map>
        </div>
        </div>
      );
  }
  }

  handleLeafletClick(event){
    console.log('leaflet click event', event)
    this.props.setUserLocationAction(event.latlng)
  }
}

MyComponents.MapView = MapView
