var top_menu_height = 0;
jQuery(function ($) {
  $(window).load(function () {
    $(".external-link").unbind("click");
  });

  $(document).ready(function () {
    top_menu_height = $(".templatemo-top-menu").height();
    // scroll spy to auto active the nav item
    $("body").scrollspy({
      target: "#templatemo-nav-bar",
      offset: top_menu_height + 20,
    });
    $(".external-link").unbind("click");

    // scroll to top
    $("#btn-back-to-top").click(function (e) {
      e.preventDefault();
      scrollTo("#templatemo-top");
    });

    // scroll to specific id when click on menu
    $(".templatemo-top-menu .navbar-nav a").click(function (e) {
      e.preventDefault();
      var linkId = $(this).attr("href");
      scrollTo(linkId);
      if ($(".navbar-toggle").is(":visible") == true) {
        $(".navbar-collapse").collapse("toggle");
      }
      $(this).blur();
      return false;
    });

    $(".templatemo-top-menu ").stickUp();

    //gallery light box setup
    $("a.colorbox").colorbox({
      rel: function () {
        return $(this).data("group");
      },
    });
  });
});

// scroll animation
function scrollTo(selectors) {
  if (!$(selectors).size()) return;

  // If mobile menu is open, close it first
  var $navbarCollapse = $('.navbar-collapse');
  if ($navbarCollapse.hasClass('show')) {
    $navbarCollapse.collapse('hide');
  }

  // Scroll after collapse animation
  setTimeout(function () {
    var selector_top = $(selectors).offset().top - top_menu_height;
    $("html,body").animate({ scrollTop: selector_top }, "slow");
  }, 300); // matches collapse animation duration
}
