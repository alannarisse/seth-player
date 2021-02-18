$(document).ready(function() {
          var playing = false;
        
          // Add file names.
          $('.audio-button').each(function() {
            var $button = $(this);    
            var $audio = $button.find('audio');
            
            $($('').text($audio.attr('src'))).insertBefore($audio);
          });
        
          // Add click listener.
          $('.audio-button').click(function() {
            var $button = $(this);    
            var audio = $button.find('audio')[0];
            
            // Toggle play/pause
            if (playing !== true) {
              audio.play();
            } else {
              audio.pause();
            }
        
            // Flip state
            $button.toggleClass('playing');
            playing = !playing
          });
        });  