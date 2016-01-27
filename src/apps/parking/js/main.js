$(document).ready(function() { 
  showPage("welcome");
  
  $('.parallax').parallax();
  
  $("#Welcome").click(function(){
    showPage('welcome');
  })
  $("#Garages").click(function(){
    showPage('garages');
  })
  $("#Map").click(function(){
    showPage('garages_map', function() {
      initMap();
    });
  });
  
});

function showPage(file, completedFunc) {
  $( "#presentation_content" ).load( "./pages/" + file+".html", completedFunc);
}