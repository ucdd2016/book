MyComponents.Group = React.createClass({
	render: function(){
		//link to travel.html page
		return <li className="collection-item blue-grey darken-3"><a onClick={this.setgroup.bind(this)} href="travel.html">{this.props.group}</a></li>
	},
	setgroup(e){
		// store the group name
		localStorage.setItem( 'group', this.props.group)
	}
});

class Groups extends React.Component{
	render(){
		var g = this.props.data.group.map(function (v, i) {
			return <MyComponents.Group group={v} key={i}/>
		});
		return <div className="card blue-grey darken-4 center-align">
			<div className="card-content white-text">
          		<span className="card-title">Groups</span>
        		<ul className="collection">{g}</ul>
        	 </div>
        </div>	
	}

}

MyComponents.Groups = Groups;
	