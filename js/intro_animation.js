$(document).ready(function()
{   
    anime({
        targets: "#header-image",
        duration:0,
        translateY: 100,
      });
    anime({
        targets: "#header-image",
        opacity:1,
        duration:400,
        translateY: 0,
        delay:200,
        easing: 'easeInOutQuad'
      });


});