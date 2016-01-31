MyComponents.City = React.createClass({

  render: function() {
    return (
      <div className="card">
        <div className="card-content">
        TODO: This is a component to display the weather of a city.
        Raw props data is {JSON.stringify(this.props.city)}
        </div>
      </div>
    );
  }

});

MyComponents.CityList = React.createClass({
  render: function() {

    var cityElements = this.props.cities.map(function(c,i){
      return <MyComponents.City city={c} key={i}/>
    })

    return (
      <div className="card">
        <div className="card-content">
        TODO: This is a component to display the weather of a list of cities
        Raw props data is {JSON.stringify(this.props.cities)}

        {cityElements}

        </div>
      </div>
    );
  }
});
