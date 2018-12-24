import * as $ from 'jquery';
// import autoNumeric from 'autonumeric';
import './bootstrap-inputmask';

// $(function($) {
//     $('.autonumber').autoNumeric('init');
// });
$.browser = {};
(function () {
    $.browser.msie = false;
    $.browser.version = 0;
    if (navigator.userAgent.match(/MSIE ([0-9]+)\./)) {
        $.browser.msie = true;
        $.browser.version = RegExp.$1;
    }
})();