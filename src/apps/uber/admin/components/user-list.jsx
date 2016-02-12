MyComponents.user = React.createClass({
	render: function(){
		return( 
		<div className="card-panel deep-orange lighten-1">
			<div className="card-content">
      			<span className="card-title text-darken-4"><h4>{this.props.user.restaurant_name}</h4></span>
    			 <h7 className="blue-grey darken-4 white-text">Delivery location: {this.props.user.delivery_location}</h7>
    	</div>
			<div clasName="card-action">
          <p>Order amount: {this.props.user.order_amount}</p>
          <p>Time: {this.props.user.delivery_time}</p>
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
