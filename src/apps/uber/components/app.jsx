class App extends React.Component {
  render(){
    return <div>
      <MyComponents.NavBar/>
      <MyComponents.MapView
          providers={this.props.data.providers}
          center={this.props.data.center}/>
      <MyComponents.Team team={this.props.data.team}/>
    </div>
  }
}

MyComponents.App = App
