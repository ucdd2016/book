class User extends React.Component {

  render(){

    if (this.props.user){
      // user is authenticated
      //console.log(this.props)
      return <div className="card-panel deep-orange lighten-1 white-text">
          <h2>Hello {this.props.user.displayName}({this.props.user.username})!</h2>
          <a href="#" onClick={this.props.logoutAction} className="waves-effect waves-light btn orange">Logout</a>
          <h2 className="white-text">Add an Order to be delivered</h2>
          <a href="orders.html" className="waves-effect waves-light btn orange">Add orders</a>
          </div>
    
    } else {
      // user is not set
      return <div className="card-panel deep-orange lighten-1">
        <h2 className="white-text">You are not logged in yet.</h2>
        <a href="#" onClick={this.props.loginAction} className="waves-effect waves-light btn orange">Login via Github</a>
      </div>
    }
  }

}
MyComponents.User = User
