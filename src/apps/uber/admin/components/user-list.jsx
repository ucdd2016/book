MyComponents.order = React.createClass({
  click: function(event){
  },
  render: function(){
		return(
			 <p className="blue-grey darken-3 white-text">
        {this.props.order.name}: {this.props.order.location}
      </p>			 
		);
	}
});

MyComponents.user = React.createClass({
	render: function(){
    var name = this.props.user.restaurant
		var order = this.props.user.order.map(function(o, i){
			return <MyComponents.order order={o} key={i} n={name}/>
		})
		return( 
		<div className="card-panel deep-orange lighten-1">
			<div className="card-content">
      			<span className="card-title text-darken-4"><h4>{this.props.user.restaurant}</h4></span>
    			 <p>Address: {this.props.user.location}</p>
    	</div>
			<div clasName="card-action">
          {order}
      </div>
		</div>
		);
	}
});

class UserList extends React.Component {
  render(){
  	var user = this.props.users.map(function(u, i){
  		return <MyComponents.user user={u} key={i} />
  	})
    return( 
    <div className="col s10" id="restaurant">
     <div className="icon-block">
        <h2 className="center"><i className="material-icons">receipt</i></h2>
        <h3 className="center">Orders</h3>
 		{user}
     </div>      
    </div>
    );
  }
}

MyComponents.UserList = UserList
