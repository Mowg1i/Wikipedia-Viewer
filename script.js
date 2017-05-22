
$(document).ready(function() {
  
  document.getElementById("random").onclick = function() { window.open("https://en.wikipedia.org/wiki/Special:Random");
                                                         }
  
    var apilink = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=";
  
    var searchbutton = document.getElementById("search");
    var results = document.getElementById("results");
  
    searchbutton.onclick = function(){

      var jsonlink = apilink + document.getElementById("searchinput").value;
      
    $.get(jsonlink, function(data) {
      
      results.innerHTML = '';

      var titles = data[1];
      var infos = data[2];
      var links = data[3];
      
      for (var i = 0; i < titles.length; i++) {
      results.innerHTML += '<div class="res"><h4><a target="_blank" href="'+ links[i] + '">' + titles[i] + '</h4>' + '<p>' + infos[i] + '</p></a></div>';
      }
      
}, "jsonp" );
    
  }
  
});