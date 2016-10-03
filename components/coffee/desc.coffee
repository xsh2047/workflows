$ = require 'jquery'

do fill = (description = "I am a Computer Science student at the University of the West Indies adamant in pursuing a Career within my field of study as well as the Visual Arts. ") ->
  $('#description').append "#{description}"
fill
