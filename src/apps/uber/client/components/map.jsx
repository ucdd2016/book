const {Map, Marker, CircleMarker, Popup, TileLayer, MapLayer}  = window.ReactLeaflet

class MapView extends React.Component {
  render(){
    const users = this.props.users
    const providers = this.props.providers
    const providerElements = _.map(providers, function(p,i){
     
      var chiphead = L.icon({
      iconUrl:  "../chiphead.png",
      iconSize: [50, 50],
      shadowSize: [10, 10]
      })
      var latlong = [p.lat , p.long]
      if (p.active == true){
      return <Marker position = {latlong} key={i} icon ={chiphead}>
        <Popup>
          <span><h5> Chip is here! At the {p.name}</h5></span>
        </Popup>
      </Marker>
      }
      else {
        return null
         }
    })
  

    const userElements = _.map(users, function(u,i){
      var pos = u.pos;

      var u_icon = L.icon({
      iconUrl: '../user.png',
      iconSize: [40, 40],
      iconAnchor: [0, 40],
      popupAnchor: [20, -30]
      })

      return <Marker position={pos} key={i} icon={u_icon}>
        <Popup>
          <span><b> {u.displayName}</b></span>
        </Popup>
      </Marker>
    })

    let userElement
    if (this.props.user){
      userElement = <CircleMarker center={this.props.user.pos}/>
    } else {
      userElement = ''
    }


    // Note: .bind(this) is important for the handler function's 'this'
    // pointer to refer to this MapView instance

    return  <Map center={this.props.center}
          zoom={14}
          onLeafletClick={this.handleLeafletClick.bind(this)}>
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {providerElements}
        {userElements}
      </Map>
  }


  handleLeafletClick(event){
    console.log('leaflet click event', event)
    this.props.setUserLocationAction(event.latlng)

  }
}

MyComponents.MapView = MapView