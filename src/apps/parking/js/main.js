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
    showPage('garages_map');
  })
});

function showPage(file) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("presentation_content").innerHTML = xmlhttp.responseText;
        }
        else{
            document.getElementById("presentation_content").innerHTML = "<p>There was an error loading the page</p>"
        }
    }   
    xmlhttp.open("GET", "./pages/"+file+".html", true);
    xmlhttp.send();
}