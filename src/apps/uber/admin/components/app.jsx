class App extends React.Component {
  render(){
    console.log(this.props.data)
    return(
    
    <div className="row">
      <MyComponents.NavBar actions={this.props.actions}/>
    <div className="row">
      <MyComponents.UserMap users={this.props.data.users} providers={this.props.data.drivers} center={this.props.data.center}/>
      <MyComponents.UserList users={this.props.data.users}/>
      <MyComponents.ProviderList providers={this.props.data.drivers}/>
    </div>   	
    </div>
    );
  }
}

MyComponents.App = App