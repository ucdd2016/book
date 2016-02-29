class NavBar extends React.Component {

  render(){
    return (
      <nav className="nav-wrapper #ffc107 amber">
        <div className="nav-wrapper #ffc107 amber navbar navbar-inverse navbar-fixed-top">
        <span className= "black-text">
        <a href="#" className="brand-logo">Chip Tracker</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="index.html">Home</a></li>
          <li><a href="client/index.html">Client</a></li>       
          <li><a href="admin/index.html">Admin</a></li>
        </ul>
        </span>
        </div>
      </nav>
    );
  }

}
MyComponents.NavBar = NavBar
