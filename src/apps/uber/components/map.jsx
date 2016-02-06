
const {Map, Marker, Popup, TileLayer, MapLayer}  = window.ReactLeaflet

class MapView extends React.Component {
  render(){

    const providers = this.props.providers
    const providerElements = _.map(providers, function(p,i){
      return <Marker position={p.pos} key={i}>
        <Popup>
          <span>{JSON.stringify(p)}</span>
        </Popup>
      </Marker>
    })

    return  <Map center={this.props.center} zoom={13}>
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {providerElements}
      </Map>
  }
}

MyComponents.MapView = MapView
