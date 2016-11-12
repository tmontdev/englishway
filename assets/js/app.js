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

$(document).ready(function () {
    $(document).on("scroll", onScroll);

    //smoothscroll
    $('a.page-scroll').on('click', function (e) { // ^= que contem
            var headerHeight = $('.header-bar').height();
        e.preventDefault();
        //$(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');

        var target = this.hash,
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - $('.header-bar').height()
    }, 500, 'swing');
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.page-scroll').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.page-scroll').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}



$(function(){
        var headerHeight = $('.header-bar').height();
        var st = $('.header-st-row').height();
        var sliderHeight = $('.slider').height() - headerHeight;
        sliderHeight = sliderHeight - st;


        $('.page-scroll').hover(function() {
                $(this).addClass("active");
        }, function() {
                $(this).removeClass("active");
        });


        $(window).scroll(function(){
                if($(this).scrollTop() > st){
                        $('.header-bar').addClass("header-bar-fixed");
                }else{
                        $('.header-bar').removeClass("header-bar-fixed");
                }

        });
});

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

$(function(){
    var validateForm = true;
    $('.send-button').click(function(event) {
        $('.form-item').each(function() {
           var value = $(this).val();
           var response = $(this).val().trim().length;
           if (response == 0) {
               alert('Preencha o campo'+ $(this).attr('name'));
               validateForm = false;
           }
    });
    });

    if (validateForm === false) {
        return false;
    }
        var formName = $('.name').val();
        var formPhone = $('.phone').val();
        var formEmail = $('.mail').val();
        var formMessage = $('.message').val();
        var formData = { name: formName, phone:formPhone, email: formEmail, message: formMessage };
        $.ajax({
              type: "POST",
              url: "assets/php/sendContact.php",
              data: formData,
              cache: false,
              success: function(data){
                if(data.message != "1")
                  return alert(data.error);

                alert("Mensagem enviada! Em breve te responderemos");
              },
            });
});

