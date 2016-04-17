class User extends React.Component {

    render(){

        if (this.props.user){
            //console.log(this.props.user.displayName)
            var v = this.props.user.displayName;
            var u = this.props.user.name;

            // user is authenticated
            return <ul id="nav-mobile" className="left hide-on-med-and-down">
                <li className="active"><a href="index.html">Home</a></li>
                <li><a href="newscore.html">New Score</a></li>
                <li><a href="friend.html">Find Friends</a></li>
                <li><a href={"https://github.com/" + u}>{this.props.user.name}</a></li>
                <li><a className="right" href="#" onClick={this.props.logoutAction}>Logout</a></li>
            </ul>;
        } else {
            return <ul id="nav-mobile" className="left hide-on-med-and-down">
                <li className="active"><a href="index.html">Home</a></li>
                <li><a href="newscore.html">New Score</a></li>
                <li><a href="friend.html">Find Friends</a></li>
                <li><a href="#" onClick={this.props.loginAction}>Login</a></li>
            </ul>;
        }
    }

}
MyComponents.User = User;
