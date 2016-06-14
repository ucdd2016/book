class NavBar extends React.Component {

  render(){
    return (
     <nav className="nav-wrapper grey darken-3 navbar navbar-inverse navbar-fixed-top">
      <ul id="nav-mobile navbar-inner">
        <li className="left brand-logo" id="nav-title">fooBer</li>      
        <li className="right"><a href="/apps/uber">Home</a></li>
        </ul>
      </nav>
    );
  }
}
MyComponents.NavBar = NavBar