MyComponents.User = React.createClass({
 render: function() {
   return (
         <p>{this.props.user}</p>
   );
 }
});


MyComponents.UserList = React.createClass({
  render: function() {

    var usersActive = this.props.users.map(function(u,i){
      if (u.status === "online"){
        return <MyComponents.User user={u.username} key={i}/>
      }
    })
    var usersNotActive = this.props.users.map(function(u,i){
      if (u.status === "offline"){
        return <MyComponents.User user={u.username} key={i}/>
      }
    })

    return (
      <div>
      	<div className="container">
          <div className="row">
            <div className="col s12 m6 6">
              <div className="card yellow darken-1">
                <div className="card-content black-text">
                  <span className="card-title">Active Users</span>
                    {usersActive}
                </div>
              </div>
            </div>
            <div className="col s12 m6 6">
              <div className="card black">
                <div className="card-content yellow-text">
                  <span className="card-title">Inactive Users</span>
                    {usersNotActive}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});