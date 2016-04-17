MyComponents.Task = React.createClass({

  render: function() {
    return (
      <div className="card">
        <div className="card-content">
        TODO: This is a component to display a task.
        Raw props data is {JSON.stringify(this.props.task)}
        </div>
      </div>
    );
  }

});

MyComponents.TaskList = React.createClass({
  render: function() {

    var taskElements = this.props.tasks.map(function(t,i){
      return <MyComponents.Task task={t} key={i}/>
    })

    return (
      <div className="card">
        <div className="card-content">
        TODO: This is a component to display a list of tasks
        assigned to me. Raw props data is {JSON.stringify(this.props.tasks)}

        {taskElements}

        </div>
      </div>
    );
  }
});
