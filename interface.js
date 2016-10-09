$(document).ready(function(){
  $('.logo').hide();
  $('.nav-bar').hide();
  $('.top-logo').hide();
  $('.heading').hide();
  $('.figures').hide();
  $(".main-image").hide().fadeIn('slow');

      setTimeout(function(){
          $('.logo').fadeIn('slow');
      },2500);
      setTimeout(function(){
          $('.nav-bar').fadeIn('slow');
      },1000);
      setTimeout(function(){
          $('.top-logo').fadeIn('slow');
      },1000);
      setTimeout(function(){
          $('.heading').fadeIn('slow');
      },3000);
      setTimeout(function(){
          $('.figures').fadeIn('slow');
      },3500);



});
