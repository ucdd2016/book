MyComponents.Team = React.createClass({
  render: function() {

    // inspect this.props.team to make sure we load the data correctly
    console.log('members', this.props.members)

    // For each 'member' in 'team', create a <li> component to display
    // information about this member.

    var members = this.props.members.map(function(member, i){
      return <li key={i} className="row grey darken-3">
      <span className="col-lg-2 left white-text">{member.firstname} {member.lastname}</span>
      <a className="col-lg-1 right grey-text" href={member.github}>Github</a>
      </li>
    })

    return (
      <div className="card grey darken-3">
      <div className="card-content">
      <span className="card-title yellow-custom-text">Team Members</span>
      <ul className="grey darken-3">
      {members}
      </ul>
      </div>
      </div>
      );
  }
});


