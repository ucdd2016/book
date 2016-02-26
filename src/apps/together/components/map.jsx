const {Map, Marker, CircleMarker, Popup, TileLayer, MapLayer}  = window.ReactLeaflet

class MapView extends React.Component {
    render(){

        //const restaurants = this.props.restaurants;

        //const providerElements = _.map(providers, function(p,i){
        //
        //    var pos = [p.lat, p.lon];
        //
        //    var provider_icon = L.icon({
        //        iconUrl: 'images/providerIcon.png',
        //        iconSize: [40, 40],
        //        iconAnchor: [0, 40],
        //        popupAnchor: [-3, -76]
        //    })
        //
        //    return <Marker position={pos} key={i} icon={provider_icon}>
        //        <Popup>
        //            <span><font color="black"><b> {p.name}</b></font></span>
        //        </Popup>
        //    </Marker>
        //})


        //const restaurantsElements = _.map(restaurants, function(r,i){
        //
        //    var pos = [r.lat, r.lon];
        //
        //    var restaurant_icon = L.icon({
        //        iconUrl: 'images/restaurantIcon.png',
        //        iconSize: [40, 40],
        //        iconAnchor: [0, 40],
        //        popupAnchor: [-3, -76]
        //    })
        //
        //    return <Marker position={pos} key={i} icon={restaurant_icon}>
        //        <Popup>
        //            <span><font color="black"> <b> {r.name}</b></font></span>
        //        </Popup>
        //    </Marker>
        //})


        let userElement;
        if (this.props.user){
            userElement = <CircleMarker radius={15} center={this.props.user.pos}/>;
        } else {
            userElement = '';
        }

        // Note: .bind(this) is important for the handler function's 'this'
        // pointer to refer to this MapView instance

        return  <Map center={this.props.center}
                     zoom={13}
                     onLeafletClick={this.handleLeafletClick.bind(this)}>
            <TileLayer
                url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            {userElement}
        </Map>
    }


    handleLeafletClick(event){
        console.log('leaflet click event', event)
        this.props.setUserLocationAction(event.latlng)
    }
}

MyComponents.MapView = MapView