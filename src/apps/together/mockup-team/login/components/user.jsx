class User extends React.Component {

    render(){

        if (this.props.user){
            var u = this.props.user.name;
            // user is authenticated
            return <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="../">Home</a></li>
                <li><a href={"https://github.com/" + u}>{u}</a></li>
                <li><a className="right" href="#" onClick={this.props.logoutAction}>Logout</a></li>
            </ul>;
        } else {
            return <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="../">Home</a></li>
                <li><a href="#" onClick={this.props.loginAction}>Login</a></li>
            </ul>;
        }
    }

}
MyComponents.User = User;

