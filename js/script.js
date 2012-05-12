/* Author:

*/


$(document).ready(function() {
  var MODE = 'clean'; // default mode
  
  var STRINGS = {
    'intro': {
      'clean': 'Sir, you would like to be a better citizen. Perhaps you might...',
      'dirty': 'So you want to be a better citizen, finally. How about you...'
    },
    "next": {
      'clean': 'May I see another option, please?',
      'dirty': 'I don\'t fucking like that.'
    },
    "modeCheckbox": {
      'clean': 'I am over 18, can handle swear words, and have a sense of humor.',
      'dirty': 'I am a badass motherfucker!!'
    }
  };
  
  // Check if there is a hash
  var commandId = '';
  if(window.location.hash) {
    commandId = window.location.hash.slice(1);
  }
  // if there is a hash AND that hash matches a command, load the command associated with it
  if (commandId && COMMANDS[commandId]) {
    $('h1#swears').html(COMMANDS[commandId][MODE]);
  }
  else {
    commandId = getRandomCommand(MODE)
  }
  
  // Add our next link
  $('h1#swears').after('<a href="" id="next">' + STRINGS.next[MODE]+'</a>');
  
  // When Next is clicked on, get another command
  $('a#next').click(function(event) {
      event.preventDefault();
      commandId = getRandomCommand(MODE);
  });

  // Add our mode switch
  $('body > footer').append('<div id="mode"><input name="modeCheckbox" value="true" type="checkbox"><span>' + STRINGS.modeCheckbox[MODE] + '</span></div>');
  
  // when the checkbox is clicked
  $('input[name=modeCheckbox]').click(function(event) {
    if (this.checked) {
      MODE = 'dirty';
    }
    else {
      MODE = 'clean';
    }
    
    $('.main h2').html(STRINGS.intro[MODE]);
    $('#next').html(STRINGS.next[MODE]);
    $('#mode span').html(STRINGS.modeCheckbox[MODE]);
    $('h1#swears').html(COMMANDS[commandId][MODE]);
  })
  
  // When someone presses the forward/back button
  // Internet Explorer 8, Firefox 3.6+, and Chrome 5+ ONLY
  $(window).bind( 'hashchange', function(event) {
    commandId = window.location.hash.slice(1);
    
    // if there is a hash AND that hash matches a command, load the command associated with it
    if (commandId && COMMANDS[commandId]) {
      $('h1#swears').html(COMMANDS[commandId][MODE]);
    }
    else {
      commandId = getRandomCommand(MODE)
    }
  });
});

function getRandomCommand(mode) {
  commandId = pickRandomProperty(COMMANDS);
  console.log(commandId);
  $('h1#swears').html(COMMANDS[commandId][mode]);
  window.location.hash = '#' + commandId;
  return commandId;
}

function pickRandomProperty(obj) {
    var result;
    var count = 0;
    for (var prop in obj)
        if (Math.random() < 1/++count)
           result = prop;
    return result;
}


