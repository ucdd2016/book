MyComponents.GarageSpaces = React.createClass({
  render: function() {
    return (
      <div className="card center-align blue-grey darken-1 white-text">
        <span className="card-title">Open Spaces</span>
        <div className="card-content">{this.props.open} left</div>
      </div>
    );
  }
});
