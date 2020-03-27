//var article = "covid19"
//var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + article + "&api-key=3mARzyoBMW0DZaaKZrZl1EQJcKsoYShT"

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=covid19&fq=headline&api-key=3mARzyoBMW0DZaaKZrZl1EQJcKsoYShT";

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
  });

