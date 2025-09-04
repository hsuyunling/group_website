$(function(){

    $(window).scroll(function(){
        var n = $(window).scrollTop();
        if(n > 130){
            $('.left-button').css("top", 40);
        } else {
            $('.left-button').css("top", 170 - n);
        }
    });
    
})