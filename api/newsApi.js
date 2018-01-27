var url = 'https://newsapi.org/v2/top-headlines?' +
  'country=us&' +
  'apiKey=8220ed8619744f9ea543d25b529dff64'
var req = new XMLHttpRequest()
req.open('GET', url)
req.responseType = 'json'
req.send()
req.onload = function () {
  let output = req.response
  console.log(output.articles)

  for (let index = 0; index < 5; index++) {
    $('.newsContent').append('<img src="' + output.articles[index].urlToImage + '" style="width:100%; height:auto"><br><br>' ); 
    $('.newsContent').append('<a href="'+ output.articles[index].url + '">'+ output.articles[index].title + '</a><br>');
    $('.newsContent').append('<small style="color:#ccc">' + output.articles[index].source.name + '</small><br><hr><br>');

  }
}
