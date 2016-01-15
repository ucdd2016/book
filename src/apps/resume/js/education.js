console.log('Loaded education');

function loadEducationData(){
  var fire = new Firebase('https://ucdd2bookindividual.firebaseio.com')
    fire.child('resume/education').once('value', function(snapshot){
      var info = snapshot.val();
      info.forEach(function(school){
        $('#schools').append(''+
          '<div class="row">'+
            '<div class="col s12 m6">'+
              '<div class="card blue-grey darken-1">'+
                '<div class="card-content white-text">'+
                  '<span class="card-title">'+school.name+'</span>'+           
                  '<p>Major: '+school.major+' </p> '+
                  '<p>GPA: ' + school.gpa+'</p>'+
                  '<p>Graduation Date: '+ school.graduation_date+'</p>'+
                '</div>'+
              '</div>'+
            '</div>' +
            '</div>'+
          '<br>'
      )}
    )})
                   
}