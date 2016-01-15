$(document).ready(function() { 
  var fire = new Firebase('https://ucdd2bookindividual.firebaseio.com')

  showPage("aboutme");
  fire.child('resume/info').once('value', function(snapshot){
    var info = snapshot.val();
    console.log('Name: ' + info.name);
    $('#name').text(info.name);
    $('#email').text(info.email);                         
  })

  fire.child('resume/education').once('value', function(snapshot){
    var education = snapshot.val();
    $('#education').html( ''+
      '<div class="col s12 m6">'+
        '<div class="card"></div></div>')
  })
});

function showSuccess() {
   $('#successAlert').show();
   $('#warningAlert').hide();
   $('#failureAlert').hide();
}
function showWarning() {
   $('#warningAlert').show();
   $('#successAlert').hide();
   $('#failureAlert').hide();
}
function showError() {
   $('#failureAlert').show();
   $('#successAlert').hide();
   $('#warningAlert').hide();
}
  
function showPage(file) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("presentation_content").innerHTML = xmlhttp.responseText;
            
            
            if (file == "aboutme")
            {
              loadAboutMeData();
            }
            else if( file =='education')
            {
              loadEducationData();
            }
        
        }
        else{
            document.getElementById("presentation_content").innerHTML = "<p>There was an error loading the page</p>"
        }
    }   
    xmlhttp.open("GET", "./pages/"+file+".html", true);
    xmlhttp.send();
}