MyComponents.GarageSpaces = React.createClass({
  render: function() {
    var circle_fill = "green"
    if(this.props.open == 0){
      circle_fill = "red"
    }
    return (
      <div className="card grey darken-3">
      <ul className="card-content white-text">
      <span className="card-title yellow-custom-text">Spaces</span>
      <div className="secondary-content">
      <svg height="100" width="100"><circle cx="20" cy="20" r="20" fill={circle_fill}/></svg>
      </div>
      <li>Open Spaces: {this.props.open}</li>
      <li>Total Spaces: {this.props.total}</li>
      </ul>
      </div>
      );
  }
});
