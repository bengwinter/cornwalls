
$(function () {
    var currentHash = "#";
    $(document).scroll(function () {

        $('.main-section').each(function () {
            var top = window.pageYOffset + $("#navigation").height();
            var distance = top - $(this).offset().top;
            var hash = "#" + $(this).attr('id');
            // 30 is an arbitrary padding choice, 
            // if you want a precise check then use distance===0
            if (distance < 30 && distance > -30 && currentHash != hash) {
                $('.anchor-link').removeClass('active');
                setTimeout(function(){ 
                  $('a[href='+ hash +']').addClass('active');
                }, 10);
                
                history.replaceState(null, null, hash);
                currentHash = hash;
            }
        });
    });
});