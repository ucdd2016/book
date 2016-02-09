MyComponents.NavBar = React.createClass({
  render: function() {
    return (
      <nav>
        <div className="nav-wrapper blue-grey darken-3">
        <a href="#" className="brand-logo">Yen-Teh Liu</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="#skills-heading">Skills</a></li>
          <li><a href="#tasks-heading">Tasks</a></li>
          <li><a href="#cities-heading">Cities</a></li>          
        </ul>
        </div>
      </nav>
    );
  }
});
