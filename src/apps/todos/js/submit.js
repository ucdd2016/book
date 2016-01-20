$(document).ready(function() { 
  $("#parallax").parallax()
  var fire = new Firebase('https://ucdd2bookuno.firebaseio.com')
  fire.child('todos/').on('value', function(snapshot){
    tasks = snapshot.val();
    loadData(tasks,filter);            
  $("#parallax").parallax()
                  
  })
});