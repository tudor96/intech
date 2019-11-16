$(document).ready(function()
{   
    console.log("script is working",  $("#page-wrapper"));
    var animation_trigger =0;

    $(window).scroll(function()
    {
        console.log("trigger?!");
        var nav_bar = $(".navbar-custom"); 
        var div = $(this);
        console.log("THIS DIV::"+ div + div.scrollTop());
        
        if (div.scrollTop() == 0)
        {
            if(animation_trigger){
                console.log("trigger?!", div.scrollTop() + "wut");
                anime({
                    targets: ".navbar-custom",
                    opacity:0,
                    duration:100,
                    easing: 'easeInOutQuad'
                  });
                  animation_trigger =0;
            }
            
        }
        else 
        {
            if(!animation_trigger){
                console.log("fired animation", nav_bar)
                anime({
                    targets: ".navbar-custom",
                    opacity:1,
                    duration:200,
                    easing: 'easeInOutQuad'
                  });
                  animation_trigger =1;
            }
            // alert("Reached the top!");
        }
    });
});