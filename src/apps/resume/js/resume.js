$(document).ready(function() { 
  var fire = new Firebase('https://ucdd2bookindividual.firebaseio.com')

  showPage('aboutme', function(){
      loadAboutMeData();
    });
  
  fire.child('resume/info').once('value', function(snapshot){
    var info = snapshot.val();
    console.log('Name: ' + info.name);
    $('#name').text(info.name);                      
  })
  
    $("#aboutme-tab").click(function(){
    showPage('aboutme', function(){
      loadAboutMeData();
    });
  })
  
  $("#education-tab").click(function(){
    showPage('education', function(){
      loadEducationData();
    });
  })
  $("#experience-tab").click(function(){
    showPage('experience', function() {
      loadExperienceData();
    });
  });
  
   $("#skills-tab").click(function(){
    showPage('skills', function() {
      loadSkillData();
    });
  });
   $("#subscribe-tab").click(function(){
    showPage('subscribe', function() {
      loadSubscribeData();
    });
  });
   $("#cities-tab").click(function(){
    showPage('cities', function() {
      loadCitiesData();
    });
  });
});
              
function showPage(file, completedFunc) {
  $( "#presentation_content" ).load( "./pages/" + file+".html", completedFunc);
}