class App extends React.Component {
  render(){
    return <div>
      <MyComponents.NavBar actions={this.props.actions}/>
      <div className="card">
        <MyComponents.User
            user={this.props.data.user}
            loginAction={this.props.actions.login}
            logoutAction={this.props.actions.logout}/>
      </div>
      <div className="card">
        <MyComponents.MapView
            providers={this.props.data.providers}
            center={this.props.data.center}
            users={this.props.data.users}
            setUserLocationAction={this.props.actions.setUserLocation}/>
      </div>
    </div>
  }
}

MyComponents.App = App
