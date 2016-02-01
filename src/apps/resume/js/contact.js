console.log('Loaded About me');

function loadContactData(){
  var fire = new Firebase('https://ucdd2bookindividual.firebaseio.com')
    fire.child('resume/info').once('value', function(snapshot){
      var info = snapshot.val();
      console.log('Loaded values from the webpage');
      $('#email').text('Email: '+info.email);   
      $('#description').text(info.description);
    })
}