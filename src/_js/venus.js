try {
    window.Popper = require('popper.js').default;
    window.$ = window.jQuery = require('o2system-espresso');

    require('bootstrap');
} catch (e) {
    console.log(e);
}
