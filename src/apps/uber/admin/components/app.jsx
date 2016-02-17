class App extends React.Component {
  render(){
    console.log(this.props.data)
    return(
    <div className="section">
     <nav className="nav-wrapper">
        <div className="nav-wrapper deep-orange lighten-1 navbar navbar-inverse navbar-fixed-top">
            <ul id="nav-mobile navbar-inner">
              <li className="left brand-logo" id="nav-title">fooBer Admin</li>      
              <li className="right"><a href="#restaurant">Restaurant</a></li>
              <li className="right"><a href="#map">Map</a></li>                    
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
