var filter = "All";
var tasks = [];

function openModal()
{
   $('#modal1').openModal();
}
$(document).ready( function() {
        $("#modal-body").load("inbox.html");
});

$(document).ready(function(){ 
  $("#parallax").parallax()
  var fire = new Firebase('https://ucdd2bookuno.firebaseio.com')
  fire.child('todos/').on('value', function(snapshot){
    tasks = snapshot.val();
    loadData(tasks,filter);                              
  })
});

function updateFilter(filternew){
  filter = filternew;
  loadData(tasks, filter);
}

function completeTask(id){
  console.log("Completed task " + id);
}

function loadData(tasks,filter) 
  {
    var header = $('#header');
    if( filter == 'Low'){
      header.text('Low Priority Tasks')
    }
    else if(filter == 'Medium'){
      header.text('Medium Priority Tasks')
    }
    else if( filter == 'High'){
      header.text('High Priority Tasks')
    }
    else if( filter == 'Complete'){
      header.text('Completed Tasks')
    }
    else{
      header.text('Tasks')
    }
    $('#tasks').empty();
    tasks.forEach(function(task){
      console.log(task.priority)
    })
    tasks.forEach(function(task){
              if ((task.priority == filter || filter == "All") || (filter == "Complete" && task.complete == true))
              {

                    if (task.completed == false)
                    {
                          $('#tasks').append(
                              task.priority
                              )
                      
                    }
                    
                    if (task.complete == true)
                    {
                          $('#tasks').append(
                              task.priority)
                    }
                    
                    }

                  })
  }
