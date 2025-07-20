$(function(){

    $(window).scroll(function(){
        var n = $(window).scrollTop();
        if(n > 200){
            $('.left-button').css("top", 40);
        } else {
            $('.left-button').css("top", 240 - n);
        }
    });
    
})