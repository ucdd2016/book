// Dependencies:
// - MyComponents.GarageSpaces

MyComponents.Garage = React.createClass({
  render: function() {
    return (
      <div className="card">
        <div className="card-content">
        TODO: This is a component about a garage whose
        raw data is {JSON.stringify(this.props.garage)}
          <MyComponents.GarageSpaces
            open={this.props.garage.open_spaces}
            total={this.props.garage.total_spaces}/>
        </div>
      </div>
    );
  }
});
