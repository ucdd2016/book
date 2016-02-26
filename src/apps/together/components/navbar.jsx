class NavBar extends React.Component {

    render(){
        return (
            <nav>
                <div className="nav-wrapper grey darken-3">
                    <ul className="left">
                        <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
                        <li><a href="index.html">Home</a></li>
                    </ul>
                    <a href="index.html" className="brand-logo center">WeTravel</a>
                    <ul className="right">
                        <li className="active"><a href="travel.html">Clients</a></li>
                    </ul>
                </div>
            </nav>
        );
    }

}
MyComponents.NavBar = NavBar

