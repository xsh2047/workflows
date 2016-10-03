var $, fill;

$ = require('jquery');

(fill = function(description) {
  return $('#description').append("" + description);
})("I am a Computer Science student at the University of the West Indies adamant in pursuing a Career within my field of study as well as the Visual Arts. ");

fill;
