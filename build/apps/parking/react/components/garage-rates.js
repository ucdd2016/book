// Dependencies:
// - MyComponents.GarageHours

MyComponents.Rate = React.createClass({
  render: function() {

    var beg, end, desc;
    if (typeof(this.props.rate.DESC)!="undefined") {
      beg = " "
      end = " "
      desc = this.props.rate.DESC
    }
    else {
      desc = " "
      end = " - "+this.props.rate.END
      beg = this.props.rate.BEG
    }

    return (

         
            <tr><td>{beg}{end}{desc}</td><td>{this.props.rate.RATE} {this.props.rate.RQ}</td></tr>
  
    );
  }
});


MyComponents.GarageRates = React.createClass({
  render: function() {

    var rates = this.props.rates.map(function(r,i){
      return <MyComponents.Rate rate={r} key={i}/>
    })

    return (

      <div className="card center-align blue-grey darken-1 white-text">
        <span className="card-title">Rates</span>
        <table className=" bordered centered"><thead><tr><th>Timings</th><th>Rate</th></tr></thead><tbody>{rates}</tbody></table>
      </div>
    );
  }
});
