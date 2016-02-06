class App extends React.Component {
  render(){
    return <div>
      <MyComponents.NavBar/>
      <MyComponents.MapView
          providers={this.props.data.providers}
          center={this.props.data.center}/>
    </div>
  }
}

MyComponents.App = App
