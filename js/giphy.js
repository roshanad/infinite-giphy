$(document).ready(function(){
  $("button").on("click", function(event){
    event.preventDefault();
    var api = "http://api.giphy.com/v1/stickers/search?";
    var apiKey = "&api_key=dc6zaTOxFJmzC";
    var keyword = $("#keyword").val();
    var query = "&q=" + keyword;
    var url = api+query+apiKey;

    $.ajax({
      url: url,
      type: "get",
      dataType: "json"
    }).done (function(response){
      giphy(response);
    }).fail(function(){
      console.log("Ajax request Fails!")
    }).always(function(){
      console.log("This always happens!")
    })
  })

  var giphy = function(response){
    for(var i=0; i<10; i++){
      $('body').append("<div class = 'gifs'><img src=" +response.data[i].images.fixed_height.url + "></div>");
    }
  }

  $(window).scroll( function() {
  if ( $(window).scrollTop() + $(window).height() ) {
  console.log('Bottom of page');

   }
 });
})
