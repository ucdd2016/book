MyComponents.Hour = React.createClass({
  render: function() {
    return (
      <div className="card">
        <div className="card-content">
          TODO: This is a component to display an item in the hours array
          Raw props data is {JSON.stringify(this.props)}
        </div>
      </div>
    );
  }
});


MyComponents.GarageHours = React.createClass({
  render: function() {

    var hours = this.props.hours.map(function(h,i){
      return <MyComponents.Hour hour={h} key={i}/>
    })

    return (
      <div className="card">
        <div className="card-content">
          TODO: This is a component to display the hours of this garage.
          Raw props data is {JSON.stringify(this.props)}

          { hours }

        </div>
      </div>
    );
  }
});
