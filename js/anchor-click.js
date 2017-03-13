$(document).on('click', '.anchor-link', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( 
          $.attr(this, 'href') 
        ).offset().top
    }, 1500);
});