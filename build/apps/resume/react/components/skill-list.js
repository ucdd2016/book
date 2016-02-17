MyComponents.Skill = React.createClass({

  render: function() {
    return (
      <div className="card">
        <div className="card-content green lighten-1">
        <li>
        <b>{this.props.skill.name}</b>
        <br>Years: {this.props.skill.years}</br>
        </li>
        </div>
      </div>
    );
  }

});

MyComponents.SkillList = React.createClass({
  render: function() {

    var skillElements = this.props.skills.map(function(s,i){
      return <MyComponents.Skill skill={s} key={i}/>
    })

    return (
      <div className="card">
        <div className="card-content">
        {skillElements}
        </div>
      </div>
    );
  }
});
