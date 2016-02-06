MyComponents.City = React.createClass({

  render: function() {
    return (
        <li className="collection-item teal darken-3 white-text">
          <h4>{this.props.city.cityName}</h4>
          Temperature: {this.props.city.currently.temperature} F
          <br />
          Humidity: {this.props.city.currently.humidity}
          <br />
          Current Weather: {this.props.city.currently.summary}
        </li>
    );
  }

});

MyComponents.CityList = React.createClass({
  render: function() {

    var cityElements = this.props.cities.map(function(c,i){
      return <MyComponents.City city={c} key={i}/>
    })

    return (      
        <ul className="collection">
        {cityElements}
        </ul>
    );
  }
});
