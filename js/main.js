'use strict'

var Cornwalls = {
  // var form = $('#contactForm');
  // form.find('button').click(function(e) {
  //     e.preventDefault();
  //     // e.stopPropagation();

  //     var formData = form.serialize();
  //     $.post('http://thebigflamingo.com/contact/send', formData, function(response) { 
  //       console.log(response); 

  //     $('#confirmation-holder').fadeIn(500);

  //     setTimeout(function(){
  //       $('#contactForm').find("input[type=text], input[type=email], textarea").val("");
  //       $('#confirmation-holder').fadeOut(500);
  //     }, 2500);

  //       setTimeout(function () {
  //       if ($('#contact').is(":visible")) {
          
  //       }, 3000);
  //     });
  //   });
  // };

  getDailyTimes: function() {

    var dailyBarTimes = ["12pm-2am","closed","12pm-2am","12pm-2am","12pm-2am","12pm-2am","12pm-2am"];
    var dailyKitchenCloseTime = ["midnight","midnight","midnight","midnight","midnight","midnight","midnight"];

    //do not add 0 for month
    var specialDateTimes = {"1-01-2017": {"kitchen": "11PM", "bar": "4am-2am"}};
    
    var today = new Date();
    var specialDateCheck = (today.getMonth() + 1) + '-' + today.getDate() + "-" + today.getFullYear();


    
    if (specialDateTimes[specialDateCheck] === undefined) {
      $('.daily-time').text(dailyBarTimes[today.getDay()]);
      $('.kitchen-daily-time').text(dailyKitchenCloseTime[today.getDay()]);      
    } else {
      $('.daily-time').text(specialDateTimes[specialDateCheck]["bar"]);
      $('.kitchen-daily-time').text(specialDateTimes[specialDateCheck]["kitchen"]);
    }

  }
};

$(document).ready(function(){
  Cornwalls.getDailyTimes();
});

  
    
