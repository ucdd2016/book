class NavBar extends React.Component {

    render(){
        console.log(this.props)
        if (this.props.data.user){
            return <nav>
                    <div className="nav-wrapper grey darken-3">
                        <a id="logo-container" href="#" className="brand-logo">We Travel</a>
                        <ul className="right hide-on-med-and-down">
                            <li><a href="#">Hello {this.props.data.user}</a></li>
                            <li><a href="#" onClick={this.props.actions.logout}>Log Out</a></li>
                            <li><a href="idea.html">About</a></li>
                        </ul>
                    </div>
                </nav>
        }
        else{
        return <nav>
            <div className="nav-wrapper grey darken-3">
                <a id="logo-container" href="#" className="brand-logo">We Travel</a>
                <ul className="right hide-on-med-and-down">
                    <li><a href="travel.html">Create your Travel</a></li>
                    <li><a href="#" onClick={this.props.actions.login}>Log In</a></li>
                    <li><a href="idea.html">About</a></li>
                </ul>
            </div>
        </nav>
        }
    }

}
MyComponents.NavBar = NavBar

