
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

    render(){
        var messages = this.props.messages;
        var chatRoomName=this.props.chatRoomName;
        return (
            <div id="live-chat">

                <header className="clearfix">

                    <a href="#" className="chat-close">x</a>

                    <h4>{chatRoomName}</h4>

                    <span className="chat-message-counter">3</span>

                </header>

                <div className="chat">

                    <div className="chat-history">
                            {

                                Object.keys(messages).map(function(messageKey) {
                                    var message = messages[messageKey];
                                    //console.log(message)
                                    return (
                                            <hr>
                                                <div className="chat-message clearfix">
                                                    <div className="chat-message-content clearfix">
                                                    <span className="chat-time">{localTime(message.time)}</span>
                                                    <h5>{message.username}</h5>
                                                    <p>{message.message}</p>
                                                    </div>
                                                </div>
                                            </hr>
                                    );
                                })
                            }
                    </div>

                    <p className="chat-feedback">Your partner is typing…</p>

                    <form action="#" method="post">

                        <fieldset>

                            <input type="text" placeholder="Type your message…" autofocus>
                                <input type="hidden"></input>
                                </input>
                        </fieldset>

                    </form>

                </div>
            </div>

        );
    }
}
MyComponents.Chatroom = Chatroom