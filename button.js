$(document).ready (function() {
    $("#download").hover (function() {
    $("#list").toggleClass("hide");
    $("#downloadtray").toggleClass("downloadtray"); 
    $("#downloadarrow").toggleClass("downloadarrow");     
      $("#download").click (function() {
      $("#list").toggleClass("list");
      $("#downloadtray").toggleClass("downloadtray");
      $("#downloadarrow").toggleClass("downloadarrow");
      $("#template").toggleClass("hide");       
      $("#tick").toggleClass("tick");
      $("#tickround").toggleClass("tickdraw");
      $(".text").toggleClass("Color");
      $(".text").text ("clicked");
        $("#download").hover(function() {
        $("#list").toggleClass("hide");
        $("#downloadtray").toggleClass("downloadtray");
        $("#downloadarrow").toggleClass("downloadarrow");       
        }); 
      });
    });
  }); 