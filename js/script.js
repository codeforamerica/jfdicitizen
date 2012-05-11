/* Author:

*/


$(document).ready(function() {
  // Add our next link
  $('h1#swears').after('<a href="" id="next">I don\'t fucking like that.</a>');
  
  // Check if there is a hash
  var commandId = '';
  if(window.location.hash) {
    commandId = window.location.hash.slice(1);
  }
  // if there is a hash AND that hash matches a command, load the command associated with it
  if (commandId && COMMANDS[commandId]) {
    $('h1#swears').html(COMMANDS[commandId]);
  }
  else {
    getRandomCommand()
  }
  
  // When Next is clicked on, get another command
  $('a#next').click(function(event) {
      event.preventDefault();
      getRandomCommand();
    });
  
})

function getRandomCommand() {
  commandId = pickRandomProperty(COMMANDS);
  $('h1#swears').html(COMMANDS[commandId]);
  window.location.hash = '#' + commandId;
}

function pickRandomProperty(obj) {
    var result;
    var count = 0;
    for (var prop in obj)
        if (Math.random() < 1/++count)
           result = prop;
    return result;
}


