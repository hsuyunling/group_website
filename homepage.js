$(function(){
    $('.main-content li').click(function(){
        $('.btns').removeAttr('style');
        $('.main-content li').removeClass('detailed');
        $(this).addClass('detailed');
        $('.btns').css('display', 'block');
        // $('body').css('overflow', 'hidden');
    })

    $('.fa-solid.fa-xmark').click(function(){
        // $('body').removeAttr('style');
        $('.btns').removeAttr('style');
        $('.main-content li').removeClass('detailed');
    })
})