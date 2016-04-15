$(document).ready(function () {
    //Показуємо або ховаємо текс під кнопкою
    $('.btn1').click(function () {
        $(this).parent().children('.display_none').toggleClass("display_block", "slow");
    })
    theRotator();
})

function theRotator() {
    //Викликаємо функцію зміни слайдів кожні 5 секунд
    setInterval('rotate()', 5000);
}

//Зміна слайдів
function rotate() {
    var currentSlide = $('.active_slide');
    var nextSlide = currentSlide.next();

    var currentDot = $('.active_dot');
    var nextDot = currentDot.next();

    if (nextSlide.length === 0) {
        nextSlide = $('.slide').first();
        nextDot = $('.dot').first();
    }

    currentSlide.fadeOut(600).removeClass('active_slide');
    nextSlide.fadeIn(600).addClass('active_slide');

    currentDot.removeClass('active_dot');
    nextDot.addClass('active_dot');
}