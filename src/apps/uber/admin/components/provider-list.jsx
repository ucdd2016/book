MyComponents.provider = React.createClass({
	render: function(){
		return <li className="collection-item blue-grey darken-3">{this.props.provider.name}</li>
	}
});

class ProviderList extends React.Component {
  render(){
  	console.log(this.props.providers)
  	var providers = this.props.providers.map(function(p, i){
  		return <MyComponents.provider provider={p} key={i} />
  		})
    return( 
    <div className="col s2">
    	<div className="icon-block">
        	<div className="card blue-grey darken-4 center-align">
          		<div className="card-content white-text">
          			<span className="card-title">Available Drivers</span>
        			<ul className="collection blue-grey darken-2">{providers}</ul>
        		</div>
     		</div>      
    	</div>
    </div>
    );
  }
}

MyComponents.ProviderList = ProviderList
