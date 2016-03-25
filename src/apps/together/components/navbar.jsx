class NavBar extends React.Component {

    render(){
        return (
            <nav>
                <div className="nav-wrapper grey darken-3">
                    <ul className="left">
                        <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
                        <li><a href="index.html">Home</a></li>
                    </ul>
                    <a className="brand-logo center">{this.props.data.group}</a>
                </div>
            </nav>
        );
    }

}
MyComponents.NavBar = NavBar

