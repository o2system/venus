import * as $ from 'jquery';
import * as moment from 'moment';
import 'bootstrap-datepicker';

$(document).ready(function () {
    // Date Picker
    $('.datepicker').datepicker();
    $('.datepicker-autoclose').datepicker({
        autoclose: true,
        todayHighlight: true
    });
    $('.datepicker-inline').datepicker();
    $('.datepicker-multiple-date').datepicker({
        format: "mm/dd/yyyy",
        clearBtn: true,
        multidate: true,
        multidateSeparator: ","
    });
    $('.date-range').datepicker({
        toggleActive: true
    });
});