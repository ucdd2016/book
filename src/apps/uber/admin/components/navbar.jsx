class NavBar extends React.Component {

  render(){
    return (
      <nav className="nav-wrapper black yellow-text">
        <a href="#" className="brand-logo">Chip Tracker</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="../index.html">Home</a></li>
          <li><a href="../client/index.html">Client</a></li>       
          <li><a href="../admin/index.html">Admin</a></li>
        </ul>
      </nav>
    );
  }

}
MyComponents.NavBar = NavBar
