//jquery-click-scroll
//by syamsul'isul' Arifin

var sectionArray = [2, 3, 4];

function highlightNavigation() {
  var scrollPosition = $(document).scrollTop();
  var windowHeight = $(window).height();

  if (scrollPosition === 0) {
    // Scrolled to the top, remove all highlighting
    $('.navbar-nav .nav-item .nav-link').removeClass('active');
    $('.navbar-nav .nav-item .nav-link').addClass('inactive');
  } else {
    $.each(sectionArray, function(index, value) {
      var section = $('#section_' + value);
      var offsetTop = section.offset().top;
      var sectionHeight = section.outerHeight();

      if (scrollPosition >= offsetTop - windowHeight / 2 && scrollPosition < offsetTop + sectionHeight - windowHeight / 2) {
        $('.navbar-nav .nav-item .nav-link').removeClass('active');
        $('.navbar-nav .nav-item .nav-link').addClass('inactive');
        $('.navbar-nav .nav-item .nav-link').eq(index).addClass('active');
        $('.navbar-nav .nav-item .nav-link').eq(index).removeClass('inactive');
      }
    });
  }
}

$(document).scroll(function() {
  highlightNavigation();
});

$(document).ready(function() {
  highlightNavigation();

  $('.navbar-nav .nav-item .nav-link').click(function(e) {
    var targetSection = $(this).attr('href');
    var offsetClick = $(targetSection).offset().top - 80;
    e.preventDefault();
    $('html, body').animate({
      scrollTop: offsetClick
    }, 300);
  });
});
