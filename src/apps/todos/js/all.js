console.log('Loaded expierence');

function loadAllData(){
  var fire = new Firebase('https://ucdd2bookindividual.firebaseio.com')
    fire.child('resume/skills').once('value', function(snapshot){
      var info = snapshot.val();
      
      info.languages.forEach(function(lang){
        console.log('<li class="collection-item">'+lang+'</li>')
        $('#languages').append('<li class="collection-item">'+lang+'</li>')
      })
      
      info.frameworks.forEach(function(frame){
        $('#frameworks').append('<li class="collection-item">'+frame+'</li>')
      })
      
      info.skills.forEach(function(skill){
         $('#skills').append('<li class="collection-item">'+skill+'</li>')                 
      })
    })
}
                    