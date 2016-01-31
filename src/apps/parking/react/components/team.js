MyComponents.Team = React.createClass({
  render: function() {

    // inspect this.props.team to make sure we load the data correctly
    console.log('members', this.props.members)

    // For each 'member' in 'team', create a <li> component to display
    // information about this member.

    var members = this.props.members.map(function(member, i){
      return <li key={i} className="chip blue">
              <span className="chip blue">{member.name}</span>
              <a className="white" href={'http://something'}>Github</a>
            </li>
    })

    return (
      <div>
        <h1>This is my team</h1>
        {members}
      </div>
    );
  }
});
