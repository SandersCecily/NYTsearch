

var searchTerm = "";

$(function() {

$("#searchbtn").on("click", function() {

    
    event.preventDefault();
    searchTerm = $("#searchterm").val().trim();
    console.log(searchTerm);
    goSearch();


});
});

function goSearch() {


  var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=0828e810aa4c4696a6afdb94e2027a3c&q=" + searchTerm;

  console.log("searching");
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function(results) {
    console.log(results);
    
    for (var i=0; i < 5; i++ ) {
        var list = results.response.docs[i];
        var newdiv = $("<div>");
        newdiv.attr("class","panel-body");
        var p = $("<p>");
        p.text(list.headline.main);
        
        console.log(list.headline.main);
        newdiv.append(p);
        $("#resultsboi").append(newdiv);
    }

    });
}

