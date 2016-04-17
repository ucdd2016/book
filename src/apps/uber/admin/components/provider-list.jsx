MyComponents.Provider = React.createClass({
 render: function() {
   return (

         <p>{this.props.provider}</p>
   );
 }
});


MyComponents.ProviderList = React.createClass({
  render: function() {

    var providersActive = this.props.providers.map(function(p,i){
      if (p.active){
      	console.log(p.name)
        return <MyComponents.Provider provider={p.name} key={i}/>
      }
    })
    var providersNotActive = this.props.providers.map(function(p,i){
      if (!p.active){
      	console.log(p.name)
        return <MyComponents.Provider provider={p.name} key={i}/>
      }
    })

    return (
      <div>
      	<div className="container">
          <div className="row">
            <div className="col s12 m6 6">
              <div className="card yellow darken-1">
                <div className="card-content black-text">
                  <span className="card-title">Active Providers</span>
                    {providersActive}
                </div>
              </div>
            </div>
            <div className="col s12 m6 6">
              <div className="card black">
                <div className="card-content yellow-text">
                  <span className="card-title">Inactive Providers</span>
                    {providersNotActive}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});