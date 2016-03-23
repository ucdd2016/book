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
            {Days}
            <a className="btn-floating btn-medium modal-trigger waves-effect dark-grey s1" href="#add_day"><i className="material-icons">add</i></a>
            <div id="add_day" className="modal">
                <div className="modal-content">
                    <div className="row">
                        <form className="col s12">
                            <div className="row">
                                <div className="input-field col s12">
                                    <input placeholder="Day1" id="date" type="text" className="validate"/>
                                    <label for="date">Date</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input placeholder="8:00-9:30" id="time" type="text" className="validate"/>
                                    <label for="time">Time</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input placeholder="20USD" id="budget" type="text" className="validate"/>
                                    <label for="budget">Budget</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input placeholder="Tokyo Tower" id="place" type="text" className="validate"/>
                                    <label for="place">Place</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input placeholder="Metro R Tokyo Tower" id="transportation" type="text"
                                           className="validate"/>
                                    <label for="transportation">Transportation</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input placeholder="4 Chome-2-8 Shibakoen, Minato, Tokyo 105-0011" id="address"
                                           type="text" className="validate"/>
                                    <label for="address">Address</label>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="modal-footer">
                    <a className="waves-effect waves-green btn" onClick={this.submit.bind(this)}>Submit</a>
                </div>
            </div>
        </div>
    }

    submit(e) {
        var date = $('#date').val();
        var time = $('#time').val();
        var budget = $('#budget').val();
        var place = $('#place').val();
        var transportation = $('#transportation').val();
        var address = $('#address').val();
        this.props.actions.addElement(date, time, budget, place, transportation, address)
    }

    componentDidMount() {
        $(document).ready(function () {
            // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
            $('.modal-trigger').leanModal();
        });
    }
}


MyComponents.Day = Day;