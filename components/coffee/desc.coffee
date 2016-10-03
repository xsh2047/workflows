$ = require 'jquery'

do fill = (description = "I am a Computer Science student at the University of the West Indies adamant in pursuing a Career within the field of Computer Science and or Visual Arts. ") ->
  $('#description').append "#{description}"
fill
