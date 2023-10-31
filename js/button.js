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
      $(".text").text ("Merci!");
        $("#download").hover(function() {
        $("#list").toggleClass("hide");
        $("#downloadtray").toggleClass("downloadtray");
        $("#downloadarrow").toggleClass("downloadarrow");       
        }); 
      });
    });
  }); 


  function ch_zoom() {

    document.body.style.zoom = "100%";

    setTimeout(ch_zoom, 100);

}