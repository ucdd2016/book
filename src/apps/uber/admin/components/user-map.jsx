const {Map, Marker, CircleMarker, Popup, TileLayer, MapLayer}  = window.ReactLeaflet

class UserMap extends React.Component {
  	render(){
  	var restaurant = L.icon({
        iconUrl: 'rest.png',
        iconSize: [20, 20],   
    })
    var provider = L.icon({
        iconUrl: 'person.png',
        iconSize: [30, 30],   
    })
 	var users = this.props.users.map(function(u, i){
 	 	var pos = [u.lat,u.lon] 	
 	 	return(
 	 		<Marker position={pos} icon={restaurant}>
 	 		<Popup>
 	 			<span>{u.restaurant_name}</span>
 	 		</Popup>
 	 		</Marker>
 	 	) 
 	 })
 	var providers = this.props.providers.map(function(p, i){
 		var pos = [p.lat,p.lon]
 		return(
 			<Marker position={pos} icon={provider}>
 			<Popup>
 				<span>{p.name}</span>
 			</Popup>
 			</Marker>
 		);
 	})
  	return (
  		<div className="col m10" id="map">
     	<div className="icon-block">
  		<Map center={this.props.center} zoom={13}>
        	<TileLayer
          	url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          	attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'/>
         	{users}
         	{providers}
      	</Map>
      	</div>
      	</div>
  	);
  }
	
}

MyComponents.UserMap = UserMap
