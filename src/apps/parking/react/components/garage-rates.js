MyComponents.Rate = React.createClass({
  render: function() {
    var desc = this.props.rate.DESC
    var beginning = this.props.rate.BEG ? this.props.rate.BEG : "" 
    var end = this.props.rate.END ? this.props.rate.END : ""
    var amount = this.props.rate.RATE
    var requirement = this.props.rate.RQ
    var data = ""
    if(beginning != ""){
      data += (beginning + ' - ' + end + ': $' + amount + ' ' + requirement) 
    }
    else{
      data += (desc + ': $' + amount + ' ' + requirement) 
    }
    return (
      <div className="card grey darken-2">
      <div className="card-content white-text">
      <ul>
      <li>{data}</li>
      </ul>
      </div>
      </div>
      );
  }
});


MyComponents.GarageRates = React.createClass({
  render: function() {

    var rates = this.props.rates.map(function(r,i){
      return <MyComponents.Rate rate={r} key={i}/>
    })

    return (
      <div className="card grey darken-3">
      <div className="card-content">
      <span className="card-title yellow-custom-text">Rates</span>
      { rates }
      </div>
      </div>
      );
  }
});
