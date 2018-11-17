$(function() {


    function setHeight() {
      windowHeight = $(window).innerHeight();
      $('.dp_jumbotron').css('min-height', windowHeight);
    };
    setHeight();
    $(window).resize(function() {
      setHeight();
    });





})
