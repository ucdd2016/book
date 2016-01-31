MyComponents.Skill = React.createClass({

  render: function() {
    return (
      <div className="card">
        <div className="card-content">
        TODO: This is a component to display a skill.
        Raw props data is {JSON.stringify(this.props.skill)}
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
        TODO: This is a component to display a list of skills I possess.
        Raw props data is {JSON.stringify(this.props.skills)}

        {skillElements}

        </div>
      </div>
    );
  }
});
