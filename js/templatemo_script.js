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

    // gallery category
    // $(".templatemo-gallery-category a").click(function (e) {
    //   e.preventDefault();
    //   $(this).parent().children("a").removeClass("active");
    //   $(this).addClass("active");
    //   var linkClass = $(this).attr("href");
    //   $(".gallery").each(function () {
    //     if ($(this).is(":visible") == true) {
    //       $(this).hide();
    //       $("#loadMore").hide();
    //       $("#showMore").hide();
    //     }
    //   });
    //   $(linkClass).fadeIn();

    //   if (linkClass == ".gallery") {
    //     location.reload();
    //   }
    // });

    //gallery light box setup
    $("a.colorbox").colorbox({
      rel: function () {
        return $(this).data("group");
      },
    });

    //for loadmore and showless buttons and functionality...
    // size_li = $(".templatemo-project-gallery li").size();
    $("#showLess").hide();
    x = 10;
    // $(".templatemo-project-gallery li:gt('" + (x - 1) + "')").hide();
    // $("#loadMore").click(function () {
    //   x = x + 5 <= size_li ? x + 5 : size_li;
    //   $(".templatemo-project-gallery li:lt(" + x + ")").show();
    //   $("#showLess").show();
    //   if (x >= size_li) {
    //     $("#loadMore").hide();
    //   }
    // });
    // $("#showLess").click(function () {
    //   x = x - 5 <= 10 ? 10 : x - 5;
    //   $(".templatemo-project-gallery li")
    //     .not(":lt(" + x + ")")
    //     .hide();
    //   $("#loadMore").show();
    //   if (x <= 10) {
    //     $("#showLess").hide();
    //   }
    // });
  });
});

// scroll animation
function scrollTo(selectors) {
  if (!$(selectors).size()) return;
  var selector_top = $(selectors).offset().top - top_menu_height;
  $("html,body").animate({ scrollTop: selector_top }, "slow");
}
