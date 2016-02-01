MyComponents.GarageTitle = React.createClass({
  render: function() {
    return (
      <div className="card">
        <div className="card-content">
          TODO: This is a component to display the title of this garage
          Raw props data is {JSON.stringify(this.props)}
          <h1>{this.props.title}</h1>          
        </div>
      </div>
    );
  }
});
