var filter = "all"
var tasks = []

$(document).ready(function() { 
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

function loadData(tasks,filter) 
  {
    $('#tasks').empty();
    tasks.forEach(function(task){
      console.log(task.priority);
              if (task.priority == filter || filter == "All")
              {

                          $('#tasks').append(
                              '<div class="col s12 m6">'+
                              '<div class="card blue-grey darken-1">'
                              +'<div class="card-content black-text">'+
                              '<span class="card-title collection-item '+task.priority + '">'+ task.title + '</span>'+'<p>Deadline: '+task.deadline+'        Priority: '+ task.priority +'  Type: '+ task.type +'</p>' + '</div>'
                              +'<div class="card-action">'+'<a href="#">Complete</a>\'</div>'+
                              
                              '</div>'+
                              '</div>')
                      }
                  })
  }