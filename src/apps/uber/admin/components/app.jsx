class App extends React.Component {
  render(){
    console.log(this.props.data)
    return(
    <div className="section">
    <nav>
       <div className="nav-wrapper deep-orange lighten-1">
       <a href="#" className="brand-logo">Admin</a>
       <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="#restaurant">Restaurant</a></li>
          <li><a href="#map">Map</a></li>          
        </ul>
       </div>
    </nav>
      <div className="row">
      	<MyComponents.UserList users={this.props.data.users}/>
      	<MyComponents.ProviderList providers={this.props.data.drivers}/>
      	<MyComponents.UserMap users={this.props.data.users} providers={this.props.data.drivers} center={this.props.data.center}/>
      </div>   	
    </div>
   

   
    );
  }
}

MyComponents.App = App
