// A $( document ).ready() block.
$( document ).ready(function() {

    // SLIDER
    $('.carousel').carousel({
        interval: 3000
    });
    // END SLIDER

    // MENU SCROLL
    if ($(window).width() >= 992) {  
        var lastScrollTop = 0;
        $(window).scroll(function(event){
            var st = $(this).scrollTop();
            if (st > lastScrollTop){
                $(".main-menu").slideUp("fast");
            } else {
                $(".main-menu").slideDown("fast");
            }
            lastScrollTop = st;
        });
    } 
    else {
        $(".main-menu").addClass("fixed-menu");
    }
    // END MENU SCROLL

    // collapse
    $(".abn-btn").click(function( event ) {
        event.preventDefault();
        $(".abn-btn").show();
        $( this ).hide();
    });
    // end collapse
    


});




