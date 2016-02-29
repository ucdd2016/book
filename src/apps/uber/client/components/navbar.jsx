class NavBar extends React.Component {

  render(){
    return (
      <nav className="nav-wrapper black">
        <a href="#" className="brand-logo yellow-text">Chip Tracker</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a className="yellow-text" href="../index.html">Home</a></li>
          <li><a className="yellow-text" href="../client/index.html">Client</a></li>       
          <li><a className="yellow-text" href="../admin/index.html">Admin</a></li>
        </ul>
      </nav>
    );
  }

}
MyComponents.NavBar = NavBar
