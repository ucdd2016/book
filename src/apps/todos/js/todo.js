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
			  if (task.priority == 'Low')
			  {
			  	$('#tasks').append(
				'<div class="row">'+
                '<div class="col s12 m12">'+
                '<div class="card hoverable light-green lighten-1">'
                +'<div class="card-content center-align black-text">'+
                '<span class="card-title collection-item '+task.priority + '">'+ task.title +     
                '</span>'+'<p>Deadline: '+task.deadline+'        <br>Priority: '+ task.priority +
                '  <br>Type: '+ task.type +'</p>' + 
				'<div class="chip"><img src="images/rmnp.jpg" alt="Contact Person">'+ task.assigned +'</div>'+
				'</div>'+
                '<div class="card-action black-text">'+'<a class="waves-effect waves-light btn-large green darken-1" href="#"'+    
                'onclick="completeTask(\''+key+'\');">Complete</a>\'</div>'+      
                '</div>'+
				'</div>'+
                '</div>')
			  }
			  
			  else if (task.priority == 'Medium')
			  {
				$('#tasks').append(
				'<div class="row">'+
                '<div class="col s12 m12">'+
                '<div class="card hoverable yellow lighten-1">'
                +'<div class="card-content center-align black-text">'+
                '<span class="card-title collection-item '+task.priority + '">'+ task.title +     
                '</span>'+'<p>Deadline: '+task.deadline+'        <br>Priority: '+ task.priority +
                '  <br>Type: '+ task.type +'</p>' + 
				'<div class="chip"><img src="images/rmnp.jpg" alt="Contact Person">'+ task.assigned +'</div>'+
				'</div>'+
                '<div class="card-action">'+'<a class="waves-effect waves-light btn-large green darken-1" href="#"'+    
                'onclick="completeTask(\''+key+'\');">Complete</a>\'</div>'+
                '</div>'+           
                '</div>'+
                '</div>')
			  }
			  
			  else if (task.priority == 'High')
			  {
				$('#tasks').append(
				'<div class="row">'+
                '<div class="col s12 m12">'+
                '<div class="card hoverable red lighten-1">'
                +'<div class="card-content center-align black-text">'+
                '<span class="card-title collection-item '+task.priority + '">'+ task.title +     
                '</span>'+'<p>Deadline: '+task.deadline+'        <br>Priority: '+ task.priority +
                '  <br>Type: '+ task.type +'</p>' + 
				'<div class="chip"><img src="images/rmnp.jpg" alt="Contact Person">'+ task.assigned +'</div>'+
				'</div>'+
                '<div class="card-action">'+'<a class="waves-effect waves-light btn-large green darken-1" href="#"'+    
                'onclick="completeTask(\''+key+'\');">Complete</a>\'</div>'+
                '</div>'+           
                '</div>'+
                '</div>')
			  }
			  
			  else
			  {
				$('#tasks').append(
				'<div class="row">'+
              '<div class="col s12 m12">'+
              '<div class="card hoverable blue-grey darken-1">'
              +'<div class="card-content center-align black-text">'+
                '<span class="card-title collection-item '+task.priority + '">'+ task.title +     
                '</span>'+'<p>Deadline: '+task.deadline+'        <br>Priority: '+ task.priority +
                '  <br>Type: '+ task.type +'</p>' + 
				'<div class="chip"><img src="images/rmnp.jpg" alt="Contact Person">'+ task.assigned +'</div>'+
				'</div>'+
              '<div class="card-action">'+'<a class="waves-effect waves-light btn-large green darken-1" href="#"'+    
              'onclick="completeTask(\''+key+'\');">Complete</a>\'</div>'+
              '</div>'+             
              '</div>'+
              '</div>')
			  }         
            }
                    
            if (task.completed == true)
            {
              $('#tasks').append(
				'<div class="row">'+
              '<div class="col s12 m12">'+
              '<div class="card hoverable blue-grey darken-1">'
              +'<div class="card-content center-align black-text">'+
                '<span class="card-title collection-item '+task.priority + '">'+ task.title +     
                '</span>'+'<p>Deadline: '+task.deadline+'        <br>Priority: '+ task.priority +
                '  <br>Type: '+ task.type +'</p>' + 
				'<div class="chip"><img src="images/rmnp.jpg" alt="Contact Person">'+ task.assigned +'</div>'+
				'</div>'+
              '<i class="large mdi-action-done"></i>'+
              '</div>'+             
              '</div>'+
              '</div>')
            }      
          } 
        }
      }
}
