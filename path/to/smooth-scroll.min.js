
$('.interactive-menu-button a').click(function () {
    $(this).toggleClass('active');
  });
  
  var scroll = new SmoothScroll('a[href*="#"]');
  
  $('.more-btn').click(function () {
    var hiddenGallery = $('#hiden-gallery');
    hiddenGallery.toggleClass('hide open');
    $(".more-btn-inside").text(hiddenGallery.is(".open") ? "Show Less." : "Show More.");
  });
  
  function slickify() {
    var blogSlider = $('.blog-slider');
    blogSlider.slick({
      autoplay: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 991,
          settings: "unslick"
        }
      ]
    });
  
    $(".slick-next, .slick-prev").text("").addClass("icofont-long-arrow-right icofont-long-arrow-left");
  }
  
  slickify();
  
  $(window).resize(function () {
    var $windowWidth = $(window).width();
    var blogBtn = $('#blog-btn');
  
    if ($windowWidth > 991) {
      slickify();
      blogBtn.addClass('hide-me');
    } else if ($windowWidth < 991) {
      blogBtn.removeClass('hide-me');
    }
  });
  
  $('#blog-btn').click(function () {
    var hiddenBlog = $('.hiden-blog');
    hiddenBlog.toggleClass('hide-blog open-blog');
    $("#blog-btn").text(hiddenBlog.is(".open-blog") ? "Show Less Stories." : "Show More Stories.");
  });
  