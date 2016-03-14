class App extends React.Component {
    render(){

        var map

        //console.log(this.props.data.user)
        if (this.props.data.user){
            map = <MyComponents.MapView
                center={this.props.data.center}
                user={this.props.data.user}
                destinations={this.props.data.destinations}
                setUserLocationAction={this.props.actions.setUserLocation}/>
        } else {
            map = <div className="center">Log in to view the map.</div>
        }

        //just the layout, the right map should be canvas actually.


        return <div>
            <div className="center-align">
                <MyComponents.User
                    user={this.props.data.user}
                    loginAction={this.props.actions.login}
                    logoutAction={this.props.actions.logout}
                />
            </div>

        <div className="center-align">
            <div className="container-full">
                <div className="row">
                    <div className="col s6 push-s3">
                        <div className="card blue darken-3">
                            <div className="card-content white-text">
                                {map}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </div>
    }
}

MyComponents.App = App