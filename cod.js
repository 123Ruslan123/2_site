$(function(){
   let header = $('#header');
   let intro = $('#intro');
   let introH = intro.innerHeight();
   let scrollPos = $(window).scrollTop();

    $(window).on('scroll', function(){
      
        scrollPos = $(this).scrollTop();

        if (scrollPos > introH){
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    });


    $('[data-scroll]').on('click', function(e){
        e.preventDefault();

       let elementId =  $(this).data('scroll');

       let elementOffset = $(elementId).offset().top;

       $('html, body').animate({
        scrollTop: elementOffset - 50
       },2000);

       
    });
    








});















