$(document).ready(function(){

  $(".slider").slick({
    autoplay:true,
    autoplaySpeed:10000,
    speed:600,
    slidesToShow:1,
    slidesToScroll:1,
    pauseOnHover:false,
    dots:false,
    pauseOnDotsHover:true,
    fade:false,
    draggable:true,
    prevArrow:'.controllers .prev',
    nextArrow:'.controllers .next',
  });

})

new WOW().init();

$(function(){
        var header = $('.header-bar');
        var home = $('#home');
        var st = $('.header-st-row').height();
        var headerDistance = $('.header-bar').height();

        $(window).scroll(function(){
                if($(this).scrollTop() > st){
                        $('.distance').css("margin-top", headerDistance+"px");
                        header.addClass("header-bar-fixed");
                        home.addClass("distance");


                }else{
                        header.removeClass("header-bar-fixed");
                        $('.distance').css("margin-top", "0px");
                }

        });
});
