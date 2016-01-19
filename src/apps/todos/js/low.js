function loadLow(tasks) 
	{
		tasks.forEach(function(task){
							if (task.priority == "Low")
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