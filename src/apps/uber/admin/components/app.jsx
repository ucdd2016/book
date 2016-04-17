class App extends React.Component {
  render(){
    var title = "Chip's Grazin"
    return <div>
      <MyComponents.NavBar actions={this.props.actions}/>
      <div className="card">
        <MyComponents.MapView
            providers={this.props.data.providers}
            center={this.props.data.center}
            user={this.props.data.user}
            setUserLocationAction={this.props.actions.setUserLocation}/>
      </div>
      <MyComponents.UserList users={this.props.data.users}/>
      <MyComponents.ProviderList providers={this.props.data.providers}/>
    </div>
  }
}

MyComponents.App = App

