$(function() {


    function setHeight() {
      windowHeight = $(window).innerHeight();
      $('.jumbotron').css('min-height', windowHeight);
    };
    setHeight();

    $(window).resize(function() {
      setHeight();
    });




})
