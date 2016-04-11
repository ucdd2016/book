class NavBar extends React.Component {

    render(){
        return (
            <nav>
                <div className="nav-wrapper blue-grey darken-1">

                    <a href="index.html" className="brand-logo">Music_Together</a>
                    
                    <MyComponents.User
                        user={this.props.data.user}
                        loginAction={this.props.actions.login}
                        logoutAction={this.props.actions.logout}/>
                </div>
            </nav>
        );
    }

};
MyComponents.NavBar = NavBar;
