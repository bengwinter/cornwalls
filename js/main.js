'use strict'

$(document).ready(function(){
    var form = $('#contactForm');
    form.find('button').click(function(e) {
      e.preventDefault();
      // e.stopPropagation();

      var formData = form.serialize();
      $.post('http://thebigflamingo.com/contact/send', formData, function(response) { 
        console.log(response); 

      $('#confirmation-holder').fadeIn(500);

      setTimeout(function(){
        $('#contactForm').find("input[type=text], input[type=email], textarea").val("");
        $('#confirmation-holder').fadeOut(500);
      }, 2500);

        setTimeout(function () {
        if ($('#contact').is(":visible")) {
          
        }, 3000);
      });
    });
});