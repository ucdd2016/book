MyComponents.GarageSpaces = React.createClass({
  render: function() {
    return (
      <div className="card center-align">
        <div className="card-content">
          <span className="card-title"><i className="small material-icons">error</i>  Open Spaces</span>
          <p>{this.props.open} left</p>
        </div>
      </div>
    );
  }
});