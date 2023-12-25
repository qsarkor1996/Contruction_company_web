$(document).ready(function() {
  $('#mobile-menu-toggle').click(function() {
      $('#nav-links').slideToggle();
  });

  // Make sure the nav links are shown when resizing from mobile to desktop
  $(window).resize(function(){
      if($(window).width() > 768){
          $('#nav-links').show();
      } else {
          $('#nav-links').hide();
      }
  });
  $('#message-icon').click(function() {
    $('#chat-box').toggle();
});

  // Toggle the chat box
  $('#message-icon').click(function() {
    $('#chat-box').toggleClass('hidden');
  });

  // Close the chat box
  $('#close-chat').click(function() {
    $('#chat-box').addClass('hidden');
  });

  // Send the message (Dummy functionality)
  $('#send-message').click(function() {
    var message = $('#chat-input').val().trim();
    if (message !== "") {
      $('#chat-messages').append('<div>' + message + '</div>');
      // Clear the input field
      $('#chat-input').val('');
      // Scroll to the bottom of the messages
      $('#chat-messages').scrollTop($('#chat-messages')[0].scrollHeight);
    }
  });

  // Optional: Handle pressing "Enter" to send message
  $('#chat-input').keypress(function(e) {
    if (e.which === 13) { // Enter key pressed
      $('#send-message').click();
    }
  });

  $('.project-item').hover(
    function() {
      // Mouse enters the element
      $(this).find('img').css('transform', 'scale(1.1)');
    },
    function() {
      // Mouse leaves the element
      $(this).find('img').css('transform', 'scale(1)');
    }
  );

});
