//Показуємо і ховаємо правий сайдбар

$(document).ready(function () {
    var $button = $('.topSidebarButton');
    var $mask = $('#mask');
    var $rts = $('#right_sidebar');
    $button.click(function () {
        $('.container').animate({ 'right': '240px', 'top': '10px' }, 400);
        $mask.show();
        $rts.css({ 'visibility': 'visible' });
    });
    $mask.click(function () {
        $('.container').animate({ 'right': '-18.3', 'top': '0' }, 400);
        $rts.css({ 'visibility': 'hidden' });
        $mask.hide();
    });
});