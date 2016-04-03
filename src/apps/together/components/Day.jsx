MyComponents.Days = React.createClass({
    render: function(){
		return <a className='s1 chip btn' onClick={this.clickDay.bind(this)}>{this.props.d}</a>
	},
    clickDay(e){
        console.log(this.props.d, this.props.click);
         this.props.click(this.props.d)
    }
});
class Day extends React.Component {
    render() {
        var Days;
        var actions = this.props.actions;

        Days = this.props.data.days.map(function (d) {
            console.log(d);
            return <MyComponents.Days d={d} click={actions.clickDay}/>
        });
        console.log(this.props.actions)
        return <div className="row" id="dayBar">
            <a className="waves-effect waves-light btn light-blue lighten-2" href={"add.html#" + this.props.data.group}>add</a>
            {Days}
        </div>
    }
}


MyComponents.Day = Day;