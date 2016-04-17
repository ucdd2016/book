class LocationButton extends React.Component {
	

  render(){
  	var list = "list";
    var title = "Chip's Grazin";
    return (
    	<div className="center">
  		 <button data-target="modal1" className="btn modal-trigger">{title}</button>
		  <div id="modal1" className="modal">
		    <div className="modal-content">
		      <h4>Modal Header</h4>
		      <p>{title}</p>
		    </div>
		    <div className="modal-footer">
		      <a href="#!" className=" modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
		    </div>
		  </div>
		</div>
    );
  }
}

MyComponents.LocationButton = LocationButton
