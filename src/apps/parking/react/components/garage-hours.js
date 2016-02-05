// Dependencies:
// - MyComponents.GarageRates

MyComponents.Hour = React.createClass({
  render: function() {

    var to;
    if (typeof(this.props.hour.TO)!="undefined") {
      to = " - "+this.props.hour.TO
    }
    else {
      to = " "
    }

    return (

         
            <tr><td>{this.props.hour.FROM}{to}</td><td>{this.props.hour.BEG} - {this.props.hour.END}</td></tr>
  
    );
  }
});

// var HeaderRow = React.createClass({
//   render: function() {
//     return (<tr><th>"Day of week"</th></tr>);
//   }
// });

/*MyComponents.GarageHours = React.createClass({
  render: function() {

    var hours = this.props.hours.map(function(h,i){
      return <MyComponents.Hour hour={h} key={i}/>
    })

    var h1 = []

    for(var i=0;i<hours.length;i++) {
              h1.push(hours[i])
              console.log(hours[i].props.hour.BEG)
              
    
    }

    var row = []
    row.push(<HeaderRow>)

    return (
      <div className="card">
        <div className="card-content" id ="hours">
          TODO: This is a component to display the hours of this garage.
          Raw props data is {JSON.stringify(this.props)}
          {hours}



        </div>
      </div>
    );
  }
});*/

MyComponents.GarageHours = React.createClass({
  render: function() {

    var hours = this.props.hours.map(function(h,i){
      return <MyComponents.Hour hour={h} key={i}/>
    })


    return (
        <div className="card center-align blue-grey darken-1 white-text">
          <span className="card-title">Opening Hours</span>
          <table className="bordered centered"><thead><tr><th>Day of the Week</th><th>Time</th></tr></thead><tbody>{hours}</tbody></table>
        </div>
    );
  }
});
