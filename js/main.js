$('.inside-slider__img').click(function(e) {
    $('.inside-slider__img').removeClass('active')
    $('.inside-slider__item').addClass('hide')
    console.log(e.target)
    $(this).addClass('active')
    $(this).removeClass('hide')
})
$('')