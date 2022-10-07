
    //menu-desktop-focus
    $('.menu-desktop a').click(function(e){
        $('.menu-desktop a').removeClass('selected');
        $(this).addClass('selected');
        e.preventDefault();
    });


    //menu-mobile
    $('.menu-mobile i').click(function(){
        $('.menu-mobile ul').slideToggle();
        $('.text-banner').css('margin-top','250px');
    });



