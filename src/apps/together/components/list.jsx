MyComponents.Info = React.createClass({
	render: function(){
		var line = this.props.title + ': ' + this.props.value
		return <p className="collection-item black-text">{line}</p>
	}
})

MyComponents.Time = React.createClass({
	render: function(){
		var title = _.keys(this.props.value)
		var Info = _.values(this.props.value).map(function(v, k){
			return <MyComponents.Info title={title[k]} value={v} />
		})
		
		return <li className="collection-item">
                <h6 className="blue-grey darken-4 white-text">{this.props.time}</h6>
                {Info}
			</li>

	}	
})


class List extends React.Component{
	render(){
		var time = this.props.data.time
		console.log(time)
		var list = this.props.data.list.map(function(v, k){
			return <MyComponents.Time time={time[k]} value={v} />
		})
		return <div className="card blue-grey darken-4 center-align">
			<div className="card-content white-text">
          		<span className="card-title">
					{this.props.data.day}
				</span>
        		<ul className="collection" >{list}</ul>
        	 </div>
        </div>	
	}
	// componentDidMount() {
	// 	$(document).ready(function () {
	// 		$('.collapsible').collapsible({
	// 			accordion: false
	// 		});
	// 	});
	// }
}

MyComponents.List = List;
	