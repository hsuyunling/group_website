$(function(){

    let scrollTop = window.scrollY;
    $('.main-content li').click(function(){
        scrollTop = window.scrollY;
        $('.btns').removeAttr('style');
        $('.main-content li').removeClass('detailed'); //remove class 'hidden'
        $(this).addClass('detailed');//add class 'hidden'
        $('.btns').css('display', 'block');
        $('body').css({
            position: 'fixed',
            top: `-${scrollTop}px`,
        });
    })

    $('.fa-solid.fa-xmark').click(function(){
        // $('body').removeAttr('style');
        $('.btns').removeAttr('style');
        $('body').css({
            position: '',
        });        
        window.scrollTo(0, scrollTop);
        $('.main-content li').removeClass('detailed');
    })
})