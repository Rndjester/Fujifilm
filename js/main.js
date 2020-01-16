$(document).ready(function(){
    $('.hero-form_btn').click(function(event) {
        event.preventDefault()
    })
    var activeSlide = 2;
    $('.inside-slider__img').click(function(e) {
        $('.inside-slider__img').removeClass('active')
        $('.inside-slider__item').fadeOut(200)
        var idSlideVideo = $(this).attr('id');
        activeSlide = +idSlideVideo[10];
        idSlideVideo = '#' + 'insideSlide-' + idSlideVideo[10];
        $(this).addClass('active');
        $(idSlideVideo).delay(200).fadeIn(200);
    })
    $('.inside-slider_arrow').click(function(e) {
        if (e.target.id == 'insideLeft') {
            $('.inside-slider__img').removeClass('active')
            $('.inside-slider__item').fadeOut(200)
            if (activeSlide == 1) {
                activeSlide = 4;
            }
            else {
                activeSlide -= 1;
            }
            $('#insideImg-'+[activeSlide]).addClass('active')
            $('#insideSlide-'+[activeSlide]).delay(200).fadeIn(200);
        }
        if (e.target.id == 'insideRight') {
            $('.inside-slider__img').removeClass('active')
            $('.inside-slider__item').fadeOut(200)
            if (activeSlide == 4) {
                activeSlide = 1;
            }
            else {
                activeSlide += 1;
            }
            $('#insideImg-'+[activeSlide]).addClass('active')
            $('#insideSlide-'+[activeSlide]).delay(200).fadeIn(200);
        }
        
    })  
    $('.header-burger__menu').on('click', () => {
        $('.header-burger__menu_active').toggleClass('active_burger');
        $('.header-burger__menu').toggleClass('active_menu');
    })
})
