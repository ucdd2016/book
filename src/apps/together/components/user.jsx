class User extends React.Component {

    render(){

        if (this.props.user){
            // user is authenticated
            return <div>
                <h5 className="center-align">Hello {this.props.user.displayName}!</h5>
                <a href="#" className="blue darken-3 waves-effect waves-light btn " onClick={this.props.logoutAction}>Logout</a>

            </div>
        } else {
            // user is not set
            return <div>
                <h5 className="center-align"><font color="white"> You are not logged in yet.</font></h5>
                <a href="#" onClick={this.props.loginAction} className="blue darken-3 waves-effect waves-light btn"><i className="material-icons left">vpn_key</i>Login via GitHub</a>
            </div>
        }
    }

}
MyComponents.User = User