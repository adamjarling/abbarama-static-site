$(document).ready(function() {

  $(".music-button").click(function(e) {
      e.preventDefault();
      $('html, body').animate({
          scrollTop: $("#music").offset().top
      }, 1000);
  });
});
