MyComponents.Days = React.createClass({
	render: function(){
		return (
		<div className='col s1 chip'>{this.props.d}</div>
		)
	}
})
class Day extends React.Component {
	render(){	
		var Days = this.props.data.days.map(function(d){
			console.log(d)
			return <MyComponents.Days d={d}/>
		})
		return <div className="col s12">
			{Days}
		</div>
	}
}

MyComponents.Day = Day