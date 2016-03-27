//Валідація форми

function prov_adress(obj) {
    var adr = obj.mail.value;
    var tel1 = obj.phoneNum.value;
    var adr_pattern = /[0-9a-z_]+@[0-9a-z_]+\.[a-z]{2,5}/i;
    var tel1_pattern = /^\d+$/;
    var prov = adr_pattern.test(adr);
    var prov1 = tel1_pattern.test(tel1);
    if (prov == true && prov1 == true) {
        alert("Заявку відправлено!");
    }
    else {
        alert("Введенні дані не коректні!");
    }
}

$(document).ready(function () {
    //Ховаємо форму 2
    $('#closeF2, .form2Margin,#resetF2,send').click(function () {
        $('.form2Margin').css({'display':'none'})
    })
    //Показуємо форму 2
    $('#PopOform').click(function () {
        $('.form2Margin').css({ 'display': 'block' })
    })


    //Наведення на чекбокс
    $('.jq-selectbox li').hover(function () {
        $('.jq-selectbox__select').addClass('li_hoverr');
    }, function () {
        $('.jq-selectbox__select').removeClass('li_hoverr');
    });
    $('.show-task').hover(function () {
        $(this).children('.delete-task').css('color', '#dcdf3c');
        $(this).children('.jq-checkbox').addClass('jq-checkbox_hover');
    },
    function () {
        $(this).children('.delete-task').css('color', 'black');
        $(this).children('.jq-checkbox').removeClass('jq-checkbox_hover');
    });



    //Анімація лейблів форм корявенько(
    $(':input[text]').val('');
    $('.PIB').hover(function () {
        $('.PIBL').animate({ 'left': '-40px' });
    },
    function () {
        if ($(this).val() == '') {
            $('.PIBL').animate({ 'left': '0px' });
        }
    });
    $('.Email').hover(function () {
        $('.EmailL').animate({ 'left': '-60px' });
    },
    function () {
        if ($(this).val() == '') {
            $('.EmailL').animate({ 'left': '0px' });
        }
    });
    $('.telF').hover(function () {
        $('.TelL').animate({ 'left': '-205px' });
    },
    function () {
        if ($(this).val() == '') {
            $('.TelL').animate({ 'left': '0px' });
        }
    })
});


//Стилізація селектів
(function ($) {
    $(function () {
        $('.dani select, #chb2f2,#chb1f2').styler();
    });
})(jQuery);