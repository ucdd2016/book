MyComponents.Skill = React.createClass({
  render: function() {
    return (
        <ul className="card">
          <span className="card-title" style={{"padding-left": "5px"}}> {this.props.skill.name}</span>
          <p style={{"padding": "10px"}}>I have written code in {this.props.skill.name} for {this.props.skill.years} years</p>
        </ul>
    );
  }
});

MyComponents.SkillList = React.createClass({
  render: function() {

    var skillElements = this.props.skills.map(function(s,i){
      return <MyComponents.Skill skill={s} key={i}/>
    })

    return (
      <div className="card red lighten-1">
        <div className="card-content">
        <ul className="collection-item"> {skillElements} </ul>
        </div>
      </div>
    );
  }
});
