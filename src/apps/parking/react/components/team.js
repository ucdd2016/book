MyComponents.Team = React.createClass({
  render: function() {

    // inspect this.props.team to make sure we load the data correctly
    console.log('members', this.props.members)

    // For each 'member' in 'team', create a <li> component to display
    // information about this member.

    var members = this.props.members.map(function(member, i){
      return <li key={i} className="collection-item blue-grey darken-1 white-text">
             <a className="chip waves-effect" href={member.github}>{member.name} {member.lastname}</a>
             </li>
    })

    return (
      <div className="card blue-grey darken-1 white-text">

        <div className="card-content">
          <span className="card-title center-align">Team Members</span>
          <ul className="collection ">
            {members}
          </ul>
        </div>
      </div>
    );
  }
});