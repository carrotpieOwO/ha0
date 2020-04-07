var isFolded = true;
$("#hamburger-1").on("click", function () {
  if (isFolded) {
    $("#nav").css("z-index", "10");

    // $('#slide-menu').css('z-index','8');
    $("#project").css("z-index", "-8");
    $(".hero__caption").css("visibility", "hidden");
    // $('#nav').css('background-color','white');

    //$('#project').css('background-color','white');

    $(".line").css("background-color", "black");
    $("#slide-menu").animate(
      {
        height: "100%",
      },
      1000
    );
    $("#slide-menu").css("z-index", "9");
    $(".nav-menu").css("color", "black");
    $(".nav-menu").css("z-index", "12");
    $(".slide-item").delay(500).animate(
      {
        opacity: "1",
      },
      500
    );
    $('.blob').css('opacity','1');
    $("#hamburger-1").toggleClass("is-active");
  } else {
    $("#project").css("background-color", "#eee3e7");

    $(".line").css("background-color", "white");
    $(".nav-menu").css("color", "white");
    $("#slide-menu").animate(
      {
        height: "0vh",
      },
      1000,
      function () {
        $('.blob').css('opacity','0');
        $(".hero__caption").css("visibility", "visible");
      }
    );

    $(".slide-item").delay(500).animate({
      opacity: "0",
    });

    $("#hamburger-1").toggleClass("is-active");
  }
  isFolded = !isFolded;
});

$("#menu_project").hover(
  function () {
    $("#project_video").css("visibility", "visible");
  },
  function () {
    $("#project_video").css("visibility", "hidden");
  }
);

$("#menu_about").hover(
  function () {
    $("#about_video").css("visibility", "visible");
  },
  function () {
    $("#about_video").css("visibility", "hidden");
  }
);

$("#menu_contact").hover(
  function () {
    $("#contact_video").css("visibility", "visible");
  },
  function () {
    $("#contact_video").css("visibility", "hidden");
  }
);
