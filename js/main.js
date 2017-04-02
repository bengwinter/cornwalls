'use strict'

var Cornwalls = {

  showContactForm: function() {
    $('.event-form-button').click(function(e){
      e.preventDefault();
      $("#event-contact-form").show();
      $('html, body').animate({
        scrollTop: $("#event-contact-form").offset().top
      }, 1000);
    });
  },  

  sendContactForm: function() {
    var form = $('#contactForm');
    console.log("HI");
    form.find('button').click(function(e) {
        e.preventDefault();
        // e.stopPropagation();

        var formData = form.serialize();
        $.post('http://thebigflamingo.com/contact/send', formData, function(response) { 
          console.log(response); 

        $('#confirmation').fadeIn(500);

        setTimeout(function(){
          $('#contactForm').find("input[type=text], input[type=phone], input[type=integer], input[type=date], input[type=email], textarea").val("");
        }, 1500);

         setTimeout(function(){
          $('#confirmation').fadeOut(500);
        }, 2500);
      });
    });
  },

  getDailyTimes: function() {

    //times go [sunday, monday, tuesday, wednesday, thursday, friday, saturday ]
    var dailyBarTimes = ["if there is a game or concert at Fenway","from 12PM-2AM","from 12PM-2AM","from 12PM-2AM","from 12PM-2AM","from 12PM-2AM","from 4PM-2AM"];
    var dailyKitchenCloseTime = ["11PM (if there is a Fenway event)","11PM","11PM","11PM","11PM","11PM","11PM"];

    //do not add 0 for month
    var specialDateTimes = {"1-01-2017": {"kitchen": "11PM", "bar": "4am-2am"}};
    
    var today = new Date();
    var specialDateCheck = (today.getMonth() + 1) + '-' + today.getDate() + "-" + today.getFullYear();
    
    if (specialDateTimes[specialDateCheck] === undefined) {
      $('.daily-time').text(dailyBarTimes[today.getDay()]);
      $('.kitchen-daily-time').text(dailyKitchenCloseTime[today.getDay()]); 
      if(today.getDay() === 6) {
        $('.kitchen-daily-time').text("is");
      }     
    } else {
      $('.daily-time').text(specialDateTimes[specialDateCheck]["bar"]);
      $('.kitchen-daily-time').text(specialDateTimes[specialDateCheck]["kitchen"]);
    }

  }
};



$(document).ready(function(){
  Cornwalls.getDailyTimes();
  Cornwalls.showContactForm();
  Cornwalls.sendContactForm();

  

});

  
    
