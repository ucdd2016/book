class User extends React.Component {

  render(){

    if (this.props.user){
      // user is authenticated
      return <div className="center-align">
          <h5>Hello {this.props.user.displayName}!</h5>
          <ul className="center-align">
            <li><b>ID number:</b> {JSON.stringify(this.props.user.id)}</li>
            <li><b>Current position:</b> {JSON.stringify(this.props.user.pos)}</li>
            <li><b>Current status:</b> {JSON.stringify(this.props.user.status)}</li>
            <li><b>Github username:</b> {JSON.stringify(this.props.user.username)}</li>
            </ul>
          
          <a href="#" className="black yellow-text waves-effect waves-light btn " onClick={this.props.logoutAction}>Logout</a>
      </div>
    } else {
      // user is not set
      return <div className="center-align">
        <h5>You are not logged in yet.</h5>
        <a href="#"  onClick={this.props.loginAction} className="black yellow-text waves-effect waves-light btn ">Login via Github</a>
      </div>
    }
  }

}
MyComponents.User = User
