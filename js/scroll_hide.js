$(document).ready(function() {
    var animation_trigger = 0;
    $(window).scroll(function() {
        var div = $(this);
        if (div.scrollTop() == 0) {
            if (animation_trigger) {
                anime({
                    targets: ".navbar-custom",
                    opacity: 0,
                    duration: 100,
                    easing: "easeInOutQuad"
                });
                animation_trigger = 0;
            }
        } else {
            if (!animation_trigger) {
                anime({
                    targets: ".navbar-custom",
                    opacity: 1,
                    duration: 200,
                    easing: "easeInOutQuad"
                });
                animation_trigger = 1;
            }
        }
    });
});