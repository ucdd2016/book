MyComponents.Team = React.createClass({
  render: function() {

    // inspect this.props.team to make sure we load the data correctly
    console.log('members', this.props.members)

    // For each 'member' in 'team', create a <li> component to display
    // information about this member.

    var members = this.props.members.map(function(member, i){
      return <li key={i} className="collection-item">
              <span className="chip blue">{member.name}</span>
              <a className="white" href={'http://something'}>Github</a>
            </li>
    })

    return (
      <div className="card">

        <div className="card-content">
          <div>
            TODO: This is a component to display the info about our team
            raw props data is {JSON.stringify(this.props)}
          </div>
          <span className="card-title">Team Members</span>
          <div className="collection">
            {members}
          </div>
        </div>
      </div>
    );
  }
});
