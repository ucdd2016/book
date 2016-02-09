// Dependencies:
// - MyComponents.GarageRates

MyComponents.Hour = React.createClass({
  render: function() {

    var to;
    if (typeof(this.props.hour.TO)!="undefined") {
      to = " - " + this.props.hour.TO
    }
    else {
      to = " "
    }

    return (
      <tr><td>{this.props.hour.FROM}{to}</td><td>{this.props.hour.BEG} - {this.props.hour.END}</td></tr>
    )
  }
})

MyComponents.GarageHours = React.createClass({
  render: function() {

    var hours = this.props.hours.map(function(h, i){
      return <MyComponents.Hour hour={h} key={i}/>
    })

    return (
      <div className="card">
        <table className="striped centered">
          <thead><tr><th>Day of the Week</th><th>Time</th></tr></thead>
          <tbody>{hours}</tbody>
        </table>
      </div>
    )
  }
})

