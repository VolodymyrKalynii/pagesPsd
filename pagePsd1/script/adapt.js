﻿function windowSize() {
    if ($(window).width() < '641') {
        $('.slider h1').text('депозит «писанка»');
        $('.activeBtn').val('телефонна консультація');

        $('footer .inContainer .foter1col ').append($('footer .inContainer  .social'));
        //$('#field').click(function () {
        //    $('.left_top_sidebar a').css({ 'visibility': 'hidden' })
        //})
    } else {
        $('.slider h1').text('депозит довіра');
        $('.activeBtn').val('консультація');
        $('footer .inContainer ul').append($('footer .inContainer  .social'));
    }
}
$(window).on('load resize', windowSize);