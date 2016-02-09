MyComponents.Skill = React.createClass({

  render: function() {
    return (
      <li className="collection-item blue-grey darken-3 white-text">
        {this.props.skill}
      </li>
    );
  }

});

MyComponents.SkillList = React.createClass({
  render: function() {
    var skill = this.props.skills.map(function(s,i){
      return <MyComponents.Skill skill={s} key={i}/>
    })
    return (
      <ul className="collection">
        {skill}
      </ul>
        
    );
  }
});
