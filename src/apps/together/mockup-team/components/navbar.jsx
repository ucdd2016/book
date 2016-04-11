class NavBar extends React.Component {

    render(){
        return (
            <nav>
                <nav className="navbar-fixed-top">
                <div className="nav-wrapper black darken-1">

                    <a href="index.html" className="brand-logo right">Music_Together</a>
                    
                    <MyComponents.User
                        user={this.props.data.user}
                        loginAction={this.props.actions.login}
                        logoutAction={this.props.actions.logout}/>
                </div>
                </nav>
            </nav>
        );
    }

}
MyComponents.NavBar = NavBar;
