MyComponents.NavBar = React.createClass({
  render: function() {
    return (
      <nav className="nav-wrapper grey darken-3">
        <div className="nav-wrapper grey darken-3 navbar navbar-inverse navbar-fixed-top">
            <ul id="nav-mobile navbar-inner">
            <li className="left" id="navtitle"> SPARC Parking</li>      
            <li className="active right" id="home" ><a href="index.html"><i className="large material-icons">home</i></a></li>
          </ul>
        </div>
      </nav>
    );
  }
});
