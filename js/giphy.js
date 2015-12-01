function getGiphy(){
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
    for(var i=0; i<response.data.length; i++){
      $('body').append("<div class = 'gifs'><img src=" +response.data[i].images.fixed_height.url + "></div>");
    }
  }).fail(function(){
    console.log("Ajax request Fails!")
  }).always(function(){
    console.log("This always happens!")
  })
}

  $("button").on("click", function(event){
    event.preventDefault();
    getGiphy();
  })

  $(window).scroll( function() {
  if ( $(window).scrollTop() + $(window).height() ) {
  console.log('Bottom of page');
  getGiphy();
};
 });
