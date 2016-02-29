MyComponents.GarageTitle = React.createClass({
  render: function() {
    return (
      <div className="card grey darken-3">
      <div className="card-content">
      <span className="card-title yellow-custom-text">{this.props.title}</span>
      </div>
      </div>
      );
  }
});
