console.log('Loaded About me');

var tasks = {};
    
function loadAboutMeData(){
  var fire = new Firebase('https://ucdd2bookindividual.firebaseio.com')
    fire.child('resume/about').once('value', function(snapshot){
      var info = snapshot.val();
      console.log('Loaded values from the webpage');
      $('#description').text(info.description);   
      $('#instructions').text(info.instructions);
      $('#quirks').text(info.quirks);
    })
    
    var teamfire = new Firebase('https://ucdd2bookuno.firebaseio.com')
    teamfire.child('todos/').on('value', function(snapshot){
      tasks = snapshot.val(); 
      loadData(tasks); 
    })
}

function loadData(tasks) 
{
  $('#tasks').empty();
  $('#completedtasks').empty();
  
  if(tasks==null){
    return;
  }
    
  for( var key in tasks){
    if (tasks.hasOwnProperty(key)) {
 
      task = tasks[key];
      if( task.assigned == "nbroeking"){
          if( task.completed == false){
            $('#tasks').append('<li class="collection-item">Task: ' + task.title + ' Priority: ' + task.priority +' Type: ' + task.type + ' Due: ' + task.deadline + '</li>')
          }
        
          if( task.completed == true){
            $('#completedtasks').append('<li class="collection-item">Task: ' + task.title + ' Priority: ' + task.priority +' Type: ' + task.type + ' Due: ' + task.deadline + '</li>')
          }
      }
    }
  }
}


