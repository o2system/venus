var Switchery = require('switchery');
$('[data-plugin="switchery"]').each(function (idx, obj) {
    new Switchery($(this)[0], $(this).data());
});
$(document).ready(function () {
    // Select2
    $(".select2").select2();

    $('.selectpicker').selectpicker();
    

    $(":file").filestyle({input: false});

});