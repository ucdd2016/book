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
    console.log(snapshot.val())
    loadData(tasks,filter);                              
  })
});

function updateFilter(filternew){
  filter = filternew;
  loadData(tasks, filter);
}

function completeTask(id){
  console.log("Completed task " + id);
  
  var firebase = new Firebase('https://ucdd2bookuno.firebaseio.com')
  firebase.child('todos/'+id).update({
    completed: 1
  });
  
  //reload the data
  loadData(tasks, filter);
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
    if(tasks==null){
      return;
    }
    
    for( var key in tasks){
      if (tasks.hasOwnProperty(key)) {
 
        task = tasks[key];
        console.log(task.priority);
          
          if (((task.priority == filter && task.completed ==false)) || ((task.completed == false) && (filter == "All")) || (filter == "Complete" && task.completed == true))
          {

            if (task.completed == false)
            {
              $('#tasks').append(
              '<div class="col s12 m6">'+
              '<div class="card blue-grey darken-1">'
              +'<div class="card-content black-text">'+
              '<span class="card-title collection-item '+task.priority + '">'+ task.title +     
              '</span>'+'<p>Deadline: '+task.deadline+'        Priority: '+ task.priority +
              '  Type: '+ task.type +'</p>' + '</div>'+
              '<div class="card-action">'+'<a href="#"'+    
              'onclick="completeTask(\''+key+'\');">Complete</a>\'</div>'+
                           
              '</div>'+
              '</div>')

                      
            }
                    
            if (task.completed == true)
            {
              $('#tasks').append(
              '<div class="col s12 m6">'+
              '<div class="card blue-grey darken-1">'
              +'<div class="card-content black-text">'+
              '<i class="large mdi-action-done-all"></i>'+
              '<span class="card-title collection-item '+ task.priority + '">'+ task.title + '</span>'+'<p>Complete: ' + task.completed + '+<p>Deadline: '+task.deadline+'        Priority: '+ task.priority +'  Type: '+ task.type +'</p>' + '</div>' +
                              
              '</div>'+
              '</div>')
            }      
          }
        }
      }
}
