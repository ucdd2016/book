$(document).ready(function() { 
  var fire = new Firebase('https://ucdd2bookindividual.firebaseio.com')

  showPage("aboutme");
  fire.child('resume/info').once('value', function(snapshot){
    var info = snapshot.val();
    console.log('Name: ' + info.name);
    $('#name').text(info.name);                      
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
            
            /*if (file == "low")
            {
              loadLow();
              //LoadData
            }
            else if( file =='medium')
            {
              loadHigh();
            }
            else if( file =='high'){
              loadExperienceData();
            }
            else if( file == ''){
              loadSkillData();
            }
            else if( file == 'contact'){
              loadContactData();
            }
            else{
              loadAll();
            }*/
        
        }
        else{
            document.getElementById("presentation_content").innerHTML = "<p>There was an error loading the page</p>"
        }
    }   
    xmlhttp.open("GET", "./pages/"+file+".html", true);
    xmlhttp.send();
}

function loadData(tasks,filter) 
  {
    tasks.forEach(function(task){
              if (task.priority == filter || task.priority == "All")
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