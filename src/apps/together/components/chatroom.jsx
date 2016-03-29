
function localTime(timestamp) {
    var date = (timestamp) ? new Date(timestamp) : new Date(),
        hours = date.getHours() || 12,
        minutes = '' + date.getMinutes(),
        ampm = (date.getHours() >= 12) ? 'pm' : 'am';
        hours = (hours > 12) ? hours - 12 : hours;
        minutes = (minutes.length < 2) ? '0' + minutes : minutes;
    return '' + hours + ':' + minutes + ampm;
};


class Chatroom extends React.Component {
    submit() {
        var message = document.getElementById('messageText1').value;
        var time = Firebase.ServerValue.TIMESTAMP;
        console.log("hi",message);
        this.props.actions.sendMessage(message, time)
        document.getElementById('messageText1').value=""
    }

    close(){
        $('#live-chat').fadeOut(300);
    }

    fold(){
        $('.chat').slideToggle(300, 'swing');
        $('.chat-message-counter').fadeToggle(300, 'swing');
    }

    render(){
        var messages = this.props.messages;
        var chatRoomName=this.props.chatRoomName;

        return (
            <div id="live-chat">

                <header className="clearfix" onClick={() => this.fold()}>

                    <a href="#" className="chat-close" onClick={() => this.close()}>x</a>

                    <h4>{chatRoomName}</h4>

                    <span className="chat-message-counter">new</span>

                </header>

                <div className="chat">

                    <div className="chat-history">
                            {

                                Object.keys(messages).map(function(messageKey) {
                                    var message = messages[messageKey];
                                    //console.log(message)
                                    return (
                                                <div className="chat-message clearfix">
                                                    <div className="chat-message-content clearfix">
                                                    <span className="chat-time">{localTime(message.time)}</span>
                                                    <h5>{message.username}</h5>
                                                    <p>{message.message}</p>
                                                    </div>
                                                </div>
                                    );
                                })
                            }
                    </div>

                    <p className="chat-feedback">Your partner is typing…</p>

                    <form action="#" method="post">

                        <fieldset>

                            <textarea name="messageText1" id="messageText1" placeholder ="Type your message" rows="3" ></textarea>
                            <a className="waves-effect waves-green btn" onClick={this.submit.bind(this)}>Send</a>

                        </fieldset>

                    </form>



                </div>
            </div>

        );
    }

    submit(e) {
        var message = document.getElementById('messageText1').value;
        var time = Firebase.ServerValue.TIMESTAMP;
        console.log("hi",message);
        this.props.actions.sendMessage(message, time);
        document.getElementById('messageText1').value=""
    }

}
MyComponents.Chatroom = Chatroom

