MyComponents.Hour = React.createClass({
  render: function() {
    return(
      <div className="card grey darken-2">
        <div className="card-content white-text">
          <b> {this.props.hour.FROM}- {this.props.hour.TO} </b> <br/>
           Beggining: {this.props.hour.BEG} <br/>
           End: {this.props.hour.END}  

        </div>
      </div>
    );
  }
});

//TODO: This is a component to display an item in the hours array
   //       Raw props data is {JSON.stringify(this.props)}
MyComponents.GarageHours = React.createClass({
  render: function() {

    var hours = this.props.hours.map(function(h,i){
      return <MyComponents.Hour hour={h} key={i}/>
    })

    return (
      <div className="card grey darken-3">
        <div className="card-content yellow-custom-text">
        <span className="card-title yellow-custom-text">Hours</span>
          {hours}
        </div>
      </div>
    );
  }
});
