MyComponents.NavBar = React.createClass({
  render: function() {
    return (
      <nav className="transparent">
        <div className="nav-wrapper">
          <ul className="left">
            <li><a href="/" className="black-text">Home</a></li>
          </ul>
          <a href="/apps/parking/index.html" className="brand-logo center black-text">
            <img className="responsive-img" id="logo" src="/apps/parking/images/asia.png" alt="Team Asia logo." style={{"maxHeight": "55px", "position": "relative", "transform": "translateY(10%)"}}/>
          </a>
        </div>
      </nav>
    );
  }
});