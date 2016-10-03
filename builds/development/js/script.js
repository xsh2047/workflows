var fill;

(fill = function(description) {
  return $('#description').append("" + description);
})("I am a Computer Science student at the University of the West Indies adamant in pursuing a Career within the field of Computer Science and or Visual Arts. ");

fill;

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
