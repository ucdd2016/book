console.log('Loaded About me');

function loadAboutMeData(){
  var fire = new Firebase('https://ucdd2bookindividual.firebaseio.com')
    fire.child('resume/about').once('value', function(snapshot){
      var info = snapshot.val();
      console.log('Loaded values from the webpage');
      $('#description').text(info.description);   
      $('#instructions').text(info.instructions);
      $('#quirks').text(info.quirks);
    })
}