class NavBar extends React.Component {

  render(){
    return (
     <nav className="nav-wrapper">
        <div className="nav-wrapper deep-orange lighten-1 navbar navbar-inverse navbar-fixed-top">
            <ul id="nav-mobile navbar-inner">
              <li className="left brand-logo" id="nav-title">fooBer</li>      
              <li className="right"><a href="#map">Map</a></li>                    
            </ul>
        </div>
      </nav>
    );
  }

}
MyComponents.NavBar = NavBar
