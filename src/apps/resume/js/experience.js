console.log('Loaded expierence');

function loadExperienceData(){
  var fire = new Firebase('https://ucdd2bookindividual.firebaseio.com')
    fire.child('resume/experience').once('value', function(snapshot){
      var info = snapshot.val();
      info.forEach(function(job){
        
        var html = '<div class="row">'+
            '<div class="col s12 m6">'+
              '<div class="card blue-grey darken-1">'+
                '<div class="card-content white-text">';
        
        html += '<span class="card-title">'+job.name+'</span>';
        
        job.tasks.forEach(function(task){
           html+= '<p>'+task+'</p>'     
          });
        
          html +='</div>'+
              '</div>'+
            '</div>' +
            '</div>'+
          '<br>'
          
          $('#jobs').append(html);
      });
      });
}              