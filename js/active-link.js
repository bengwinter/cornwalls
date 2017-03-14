$(window).on('hashchange',function(){ 
  debugger;
    $('h1').text(location.hash.slice(1));
});