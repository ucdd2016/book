class Team extends React.Component {

  render() {

    // For each 'member' in 'team', create a <li> component to display
    // information about this member.

    const members = _.map(this.props.team.members, function(member, i){
      return <li key={i} className="collection-item">
              <span className="chip blue">{member.name}</span>
              <a className="white" href={'http://something'}>Github</a>
            </li>
    })

    return (
      <div className="card">

        <div className="card-content">
          <span className="card-title">Developed by Team {this.props.team.name}</span>
          <div className="collection">
            {members}
          </div>
        </div>
      </div>
    );
  }
}

MyComponents.Team = Team
