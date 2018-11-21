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

  function backgroundHeight() {
    var bH = $(document).height();
    console.log(bH);
    $('#dp_background').css('min-height', bH);;
  }

  backgroundHeight();
  $(window).resize(function() {
    backgroundHeight();
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
  var already_done_regular = false;
  var isDone = false;




  function crush500() {

    $('html, body').animate({'scrollTop': $('#dp_motif-left').offset().top - 150}, 600);


    $('.crush500-text').fadeTo(600, 0);

    $('.crush500-text_2').fadeTo(600, 0);

    $('.crush500_4 img').fadeTo(600, 0);


    setTimeout(function(){


      $('html, body').animate({'scrollTop': $('.motif-right').offset().top - 150}, 3000);

      $('.crush500_1 img').fadeTo(1200, 0);
      $('.crush500_2').fadeIn(800);

      setTimeout(function(){
        $('.crush500_2').fadeOut(1200);
        $('.crush500_3, #dp_motif-right').fadeIn(800);
      }, 800);

      setTimeout(function(){
        $('.crush500_3').fadeOut(1200);
        $('.crush500_4 img').fadeTo(1200, 1);
      }, 1600);


      setTimeout(function(){
        // Réapparition de tous les éléments disparus
        $('.crush500_1 img').fadeTo(2000, 1);
        $('.crush500-text_2').fadeIn(2000);
        $('.crush500-text_2').fadeTo(2000, 1);
        $('.dp_link-row').fadeIn(2000);
        $('.crush500-text').fadeTo(2000, 1);


      }, 2400);

      setTimeout(function(){
        isDone = true;
      }, 3000)

    }, 600);



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
    var window_bottom_position = (window_top_position + window_height - 450);

    $.each($dp_scroll, function() {
      var $element = $(this);
      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top;
      var element_bottom_position = (element_top_position + element_height);

      //check to see if this current container is within viewport
      if ((element_bottom_position >= window_top_position) &&
      (element_top_position <= window_bottom_position) && (already_done_regular == false)) {
        already_done_regular = true;
        crush500();


      }
    });
  }


  ////////////////////////// REWIND


  //**************************
  //******* FUNCTION ANIMATION
  //******* CRUSH 500
  //**************************

  var already_done_rewind = false;


  function crush500_rewind() {

    $('html, body').animate({'scrollTop': $('.crush500_4').offset().top - 150}, 600);


    $('.crush500-text').fadeTo(600, 0);

    $('.crush500-text_2').fadeTo(600, 0);

    $('.crush500_1 img').fadeTo(600, 0);


    setTimeout(function(){


      $('html, body').animate({'scrollTop': $('#dp_motif-left').offset().top - 150}, 3000);

      $('.crush500_4 img').fadeTo(1200, 0);
      $('.crush500_3').fadeIn(800);

      setTimeout(function(){
        $('.crush500_3').fadeOut(1200);
        $('.crush500_2').fadeIn(800);
      }, 800);

      setTimeout(function(){
        $('.crush500_2').fadeOut(1200);
        $('.crush500_1 img').fadeTo(1200, 1);
      }, 1600);


      setTimeout(function(){
        // Réapparition de tous les éléments disparus
        $('.crush500_1 img').fadeTo(2000, 1);
        $('.crush500-text_2').fadeIn(2000);
        $('.crush500-text_2').fadeTo(2000, 1);
        $('.dp_link-row').fadeIn(2000);
        $('.crush500-text').fadeTo(2000, 1);
        $('.crush500_4 img').fadeTo(2000, 1);

      }, 2400);

    }, 600);



  }

  //**************************
  //* ANIMATION CRUSH500 REWIND
  //* ON SCROLL
  //**************************

  var $dp_scroll = $('.dp_scroll');

  $window.on('scroll resize', check_if_in_view_rewind);
  $window.trigger('scroll');

  function check_if_in_view_rewind() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + 450);

    $.each($dp_scroll, function() {
      var $element = $(this);
      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top;


      var element_bottom_position = (element_top_position + element_height);

      //check to see if this current container is within viewport
      if ((element_bottom_position >= window_top_position) &&
      (element_top_position <= window_bottom_position) && (already_done_rewind == false) && (isDone == true)) {
        already_done_rewind = true;
        crush500_rewind();
        console.log("rewind launch");

      }
    });
  }






  // END JQUERY
});
