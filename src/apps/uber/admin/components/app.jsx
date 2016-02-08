class App extends React.Component {
  render(){
    return <div>
      <MyComponents.UserMap users={this.props.data.users}/>
      <MyComponents.UserList users={this.props.data.users}/>
      <MyComponents.ProviderMap users={this.props.data.providers}/>
      <MyComponents.ProviderList providers={this.props.data.providers}/>
    </div>
  }
}

MyComponents.App = App
