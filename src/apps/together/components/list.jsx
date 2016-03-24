var Collapsible = require('react-materialize').Collapsible;
MyComponents.Info = React.createClass({
	render: function(){
		var line = this.props.title + ': ' + this.props.value
		return <div>{line}</div>
	}
})

MyComponents.Time = React.createClass({
	render: function(){
		var title = _.keys(this.props.value);
		var Info = _.values(this.props.value).map(function(v, k){
			return <MyComponents.Info title={title[k]} value={v} />
		});
		return (
			<CollapsibleItem header={this.props.time}>
				{Info}
			</CollapsibleItem>
		);
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
				<Collapsible accordion>{list}</Collapsible>
			</div>
		</div>
	}
}


MyComponents.List = List;
