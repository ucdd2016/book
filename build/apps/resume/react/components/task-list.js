MyComponents.Task = React.createClass({
  render: function() {
    return (
        <li className="collection-item teal darken-3 white-text">
          <h4>{this.props.task.name}</h4>
          <div>{this.props.task.deadline}</div>
          <div>{this.props.task.priority}</div>
          <div>{this.props.task.type}</div>
        </li>
    );
  }
});

MyComponents.TaskList = React.createClass({
  render: function() {
    
    var Task = this.props.tasks.map(function(t,i){
      return <MyComponents.Task task={t} key={i}/>
    })

    return (
          <ul className="collection">
            {Task}
          </ul>   
    );
  }
});
