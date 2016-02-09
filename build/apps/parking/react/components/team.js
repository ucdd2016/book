MyComponents.Team = React.createClass({
  render: function() {

    // inspect this.props.team to make sure we load the data correctly
    console.log('members', this.props.members)
    
    // For each 'member' in 'team', create a <li> component to display
    // information about this member.

    var members = this.props.members.map(function(member, i){
      return <li key={i} className="collection-item blue-grey darken-3">
              <a href={member.github} className="white-text hoverable">{member.name} {member.lastname}</a>
            </li>
    })

    return (
      <div className="card blue-grey darken-4 center-align">
          <div className="card-content white-text">
              <span className="card-title">People</span>
              <ul className="collection blue-grey darken-2">{members}</ul>
          </div>
      </div>
    );
  }
});