$(".navbar_button").click(function() {
    if ($(this).hasClass("clicked")) {
        $(this).removeClass("clicked");
        $("#bar1,#bar2,#bar2b,#bar3,.round_nav").removeClass("open");

        $('.nav_content').fadeOut(100)


    } else {
        $(this).addClass("clicked");
        $("#bar1,#bar2,#bar2b,#bar3,.round_nav").addClass("open");
        $('.nav_content li').slideDown(200);
        $('.nav_content').delay(300).fadeIn(100);

    }
});