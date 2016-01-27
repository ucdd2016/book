$(document).ready(function() { 
  showPage("welcome");
  
  $("#Welcome").click(function(){
    showPage('welcome');
  })
  $("#Garages").click(function(){
    showPage('garages', function(){
      initList();
    });
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