const {Map, Marker, CircleMarker, Popup, TileLayer, MapLayer}  = window.ReactLeaflet

class MapView extends React.Component {
    render(){

        const destinations = this.props.destinations;


        const destinationsElements = _.map(destinations, function(r,i){

            var pos = [r.lat, r.lon];

            var destinations_icon = L.icon({
                iconUrl: 'images/destinationsIcon.jpg',
                iconSize: [40, 40],
                iconAnchor: [0, 40],
                popupAnchor: [-3, -76]
            })

            return <Marker position={pos} key={i} icon={destinations_icon}>
                <Popup>
                    <span><font color="black"> <b> {r.name}</b></font></span>
                </Popup>
            </Marker>
        })


        let userElement;
        if (this.props.user){
            userElement = <CircleMarker radius={15} center={this.props.user.pos}/>;
        } else {
            userElement = '';
        }

        // Note: .bind(this) is important for the handler function's 'this'
        // pointer to refer to this MapView instance

        return  <Map center={this.props.center}
                     zoom={10}
                     onLeafletClick={this.handleLeafletClick.bind(this)}>
            <TileLayer
                url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            {destinationsElements}
            {userElement}
        </Map>
    }


    handleLeafletClick(event){
        console.log('leaflet click event', event)
        this.props.setUserLocationAction(event.latlng)
    }
}

MyComponents.MapView = MapView