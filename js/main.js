$(function() {


  //functions

  $.fn.scrollBottom = function() {
    return $(document).height() - this.scrollTop() - this.height();
  };

  // Jumbotro full Height
  function setHeight() {
    windowHeight = $(window).innerHeight();
    $('.dp_jumbotron').css('min-height', windowHeight);
  };
  setHeight();
  $(window).resize(function() {
    setHeight();
  });

  // Autoplay video on click
  $('#play-video, .video figure .fas').on('click', function(ev) {
    $(this).parent().fadeOut();
    thevid = $('#video');
    $("#video")[0].src += "?autoplay=1";
  });





  //**************************
  //******* FUNCTION ANIMATION
  //******* CRUSH 500
  //**************************

  var $dp_scroll = $('.dp_scroll');
  var $window = $(window);
  var already_done = false;


  function crush500() {

    $('html, body').animate({'scrollTop': $('#dp_motif-left').offset().top - 150}, 1500);


    $('.crush500-text').fadeTo(1500, 0, function(){
      $('.crush500-text').css("visibility", "hidden");
    });

    $('.crush500-text_2').fadeTo(1500, 0, function(){
      $('.crush500-text_2').css("visibility", "hidden");
    });


    setTimeout(function(){


      $('html, body').animate({'scrollTop': $('.motif-right').offset().top - 150}, 3000);


      $('.crush500_2').fadeIn(2200);

      setTimeout(function(){
        $('.crush500_3, #dp_motif-right').fadeIn(2200);
      }, 400);

      setTimeout(function(){
        $('.crush500_4').fadeIn(2200);
      }, 800);

      setTimeout(function(){
        $('.crush500-text_2').fadeIn(800);

        $('.crush500-text_2').fadeTo(800, 0, function(){
          $('.crush500-text_2').css({
            'visibility' : 'visible',
            'opacity' : '1',
          });
        });

        $('.dp_link-row').fadeIn(800);


        $('.crush500-text').fadeTo(800, 0, function(){
          $('.crush500-text').css({
            'visibility' : 'visible',
            'opacity' : '1',
          });
        });

        $('.crush500_3').fadeOut(800);
        $('.crush500_2').fadeOut(800);


      }, 2200);

    }, 1500);



  }

  //**************************
  //******* ANIMATION CRUSH500
  //******* ON CLICK
  //**************************


  $dp_scroll.click(function() {


    crush500();

  });


  //**************************
  //******* ANIMATION CRUSH500
  //******* ON SCROLL
  //**************************


  $window.on('scroll resize', check_if_in_view);
  $window.trigger('scroll');

  function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height - 200);

    $.each($dp_scroll, function() {
      var $element = $(this);
      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top;
      var element_bottom_position = (element_top_position + element_height);

      //check to see if this current container is within viewport
      if ((element_bottom_position >= window_top_position) &&
      (element_top_position <= window_bottom_position) && (already_done == false)) {
        already_done = true;
        crush500();
      }
    });
  }

console.log(already_done)
});
