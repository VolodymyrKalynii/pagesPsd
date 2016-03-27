$(document).ready(function () {
    $('.nav').hover(function () {
        $('.nd-on720').css('visibility', 'visible');
        $('.nav').css('height', '230px');
    }, function () {
        $('.nd-on720').css('visibility', 'hidden');
        $('.nav').css('height', '30px');
    })
})

function windowSize() {
    if ($(window).width() < '721') {
        $('.nd-on720').css('visibility', 'hidden');
    } else {
        $('.nd-on720').css('visibility', 'visible');
    }
}
$(window).on('load resize', windowSize);