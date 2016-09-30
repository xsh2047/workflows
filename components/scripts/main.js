$(function(){
  console.log("Ready");
  $(".items").hover(
    function(){
      console.log("Hovered");
      $(this).animate({background: "#67C9F6"});
    }
    /*function(){

    }*/
  );
});
