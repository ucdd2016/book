$(document).ready(function() { 
  var fire = new Firebase('https://ucdd2bookindividual.firebaseio.com')
  var ref = fire.child('resume/subscribers').on('value', function(snapshot){
    console.log("Attempting to add emails to the list")
    var info = snapshot.val();

    $('#emails').empty()
    for( var email in info){
      $('#emails').append('<li class="collection-item">' + info[email]+ '</li>')
    }
  });
});

function submit(){
  
  email = $('#email').val();
  
  if( email == null || email == ""){
    console.warn('There was no email to subscribe')
    alert('Please enter a valid email address');
    return;
  }
  var fire = new Firebase('https://ucdd2bookindividual.firebaseio.com')
  var data = fire.child('resume/subscribers')
  
  var entry = {};
  entry[email.replace(/\W+/g, "")] = email
  console.log('the submit button is clicked')
  data.update(entry)
}