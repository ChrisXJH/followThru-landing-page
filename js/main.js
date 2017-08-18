$(window).ready(function () {
  // Initialize components

  var components = $(".component");
  for (var i = 0; i < components.length; i++) {
    new Component(components.eq(i));
  }

  $(window).on("scroll", function () {
    var self = $(this);
    if (self.scrollTop() >= self.height() / 2) {
      $("body").addClass('show-scrolltop');
    }
    else {
      $("body").removeClass('show-scrolltop');
    }
  });

  $(window).scroll();

  // Smooth scroll
  $(".nav-item").on("click", function (e) {
    e.preventDefault();
    var id = $(this).attr("href");
    var top = $(id).offset().top;
    scrollTop(top);
  });

  $("#scroll_to_top").on("click", function () {
    scrollTop(0);
  });

  function scrollTop(top) {
    var root = $('html, body');
    root.animate({scrollTop:top + 'px'}, 500, function () {});
  }
});
