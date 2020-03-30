$(document).ready(function(){

  $("#dog-button").click(function(){
    $("#dog-list").append("<li>Woof!</li>")
    $("#cat-list").append("<li>MeeeoOOOW!</li>")
  })

  $("#cat-button").click(function(){
    $("#cat-list").append("<li>Meow!</li>")
    $("#dog-list").append("<li>Woof Woof Woof!</li>")
  })





})