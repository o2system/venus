try {
    window.Popper = require('popper.js').default;
    // window.$ = window.jQuery = require('o2system-espresso');

    require('bootstrap');
    // require('owl.carousel');
    require('./custom.js');
} catch (e) {
    console.log(e);
}
