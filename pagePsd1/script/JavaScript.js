//Кнопка на пошуку в хедері

$(document).ready(function () {
    var $HeaderSearchField = $('#HeaderSearchField');
    var $ClearHeaderSearchField = $('#ClearHeaderSearchField');
    var $Fieldstatus;
    $ClearHeaderSearchField.hide();
    $HeaderSearchField.keyup(function () {
        var $Fieldstatus = $HeaderSearchField.val();
        if ($HeaderSearchField.val()=="") 
            $ClearHeaderSearchField.hide("fast");
        else 
            $ClearHeaderSearchField.show("fast");
    });

    $ClearHeaderSearchField.click(function () {
        $HeaderSearchField.val('');
        $ClearHeaderSearchField.hide("fast");
    })
    
});
