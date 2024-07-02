$("#btnDownload").click(function () {
  const link = document.createElement("a");
  link.href = "assets/Zin_Lin_Htun_Resume.pdf"; // Replace with the actual URL of your PDF file
  link.download = "Zin_Lin_Htun_Resume_SystemEng.pdf"; // Optional: specify the download file name
  link.target = "_blank";
  link.click();
});

$("#eduUniversity1").click(function(){
  const link = document.createElement("a");
  link.href = "https://www.wytu.edu.mm/"; // Replace with the actual URL of your PDF file
  link.target = "_blank";
  link.click();
});

$("#eduUniversity2").click(function(){
  const link = document.createElement("a");
  link.href = "https://www.napier.ac.uk/"; // Replace with the actual URL of your PDF file
  link.target = "_blank";
  link.click();
});

$(document).ready(function () {

  var w = window.innerWidth;

  if (w > 767) {
    $("#menu-jk").scrollToFixed();
  } else {
    $("#menu-jk").scrollToFixed();
  }

  $(".filter-button").click(function () {
    var value = $(this).attr("data-filter");

    if (value == "all") {
      //$('.filter').removeClass('hidden');
      $(".filter").show("1000");
    } else {
      //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
      //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
      $(".filter")
        .not("." + value)
        .hide("3000");
      $(".filter")
        .filter("." + value)
        .show("3000");
    }
  });

  if ($(".filter-button").removeClass("active")) {
    $(this).removeClass("active");
  }
  $(this).addClass("active");

  $(window).on("scroll", function () {
    let scrollPos = $(document).scrollTop();

    $("section").each(function () {
      let sectionTop = $(this).offset().top - 80;
      let sectionBottom = sectionTop + $(this).outerHeight();
      let id = $(this).attr("id");

      if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
        console.log(sectionTop + " , " + sectionBottom + ", " + id);
        $("#menu ul li a").removeClass("active");
        $('#menu ul li a[href="#' + id + '"]').addClass("active");

        $("#mobileMenu ul li a").removeClass("active");
        $('#mobileMenu ul li a[href="#' + id + '"]').addClass("active");

      }
    });

    if ($(this).scrollTop() > 360) {
      // Adjust the value (100) as needed
      $(".navbar.header").css("background-color", "var(--primary-color)");
    } else {
      $(".navbar.header").css("background-color", "");
    }
  });

  $("#mobileMenu a").on("click", function () {
    $("#mobileMenu").collapse("hide");
  });

  $(document).click(function (event) {
    var clickover = $(event.target);
    var $navbar = $(".navbar-collapse");
    var _opened = $navbar.hasClass("show");
    if (_opened === true && !clickover.hasClass("navbar-toggler")) {
      $("button.navbar-toggler").click();
    }
  });
});

