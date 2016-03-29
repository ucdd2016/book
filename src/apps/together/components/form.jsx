class form extends React.Component {


    render(){
        return <div className="card">
            <div className="row">
            <form className="col s12">
                <div>
                    <h5 className="center-align">Add Schedule</h5>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input placeholder="Day1" id="date" type="text" className="validate"/>
                        <label for="date">Date</label>
                    </div>
                </div>
                <label htmlFor="time">Time(5-24)</label>
                <p className="slider" id="time"></p>
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

                <div className="submit">
                    <a className="waves-effect waves-green btn col s2 push-s2" style={{position:"float right"}}>Submit</a>
                </div>

                <a className="waves-effect waves-green btn col s2 push-s6" href={"travel.html"}>Return</a>

                <div className="row"></div>
            </form>
            </div>
        </div>
        }


    componentDidMount() {
        var slider = document.getElementById('time');
        noUiSlider.create(slider, {
            start: [6, 7],
            connect: true,
            step: 1,
            range: {
                'min': 5,
                'max': 24
            }
        });

        var groupname = window.location.hash.substring(1);
        console.log(groupname)

        $('.submit').click(function() {
            var date = $('#date').val();
            var time = parseInt(slider.noUiSlider.get()[0])+'-'+parseInt(slider.noUiSlider.get()[1]);
            var budget = $('#budget').val();
            var place = $('#place').val();
            var transportation = $('#transportation').val();
            var address = $('#address').val();
            var firebaseRef = new Firebase('https://wetravel.firebaseio.com/Groups')
            firebaseRef.child(groupname).child('Schedule').child(date).child(time).set({
                budget: budget,
                place: place,
                transportation: transportation,
                address: address
            })
            Materialize.toast('You add a schedule to your travel plan!', 3000, 'rounded')

        })
    }




}
MyComponents.Form = form