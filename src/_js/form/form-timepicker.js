import * as $ from 'jquery';
import 'bootstrap-timepicker';

$(document).ready(function () {

    // Time Picker
    $('.timepicker').timepicker({
        defaultTIme: false,
        icons: {
            up: 'fas fa-chevron-up',
            down: 'fas fa-chevron-down'
        }
    });
    $('.timepicker-24').timepicker({
        showMeridian: false,
        icons: {
            up: 'fas fa-chevron-up',
            down: 'fas fa-chevron-down'
        }
    });
    $('.timepicker-step').timepicker({
        minuteStep: 15,
        icons: {
            up: 'fas fa-chevron-up',
            down: 'fas fa-chevron-down'
        }
    });
});