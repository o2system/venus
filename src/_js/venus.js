try {
    window.Popper = require('popper.js').default;
    window.$ = window.jQuery = require('jquery');
    require('bootstrap');
    require('o2system-espresso/src/espresso.js');
    // require('owl.carousel');
    require('./custom.js');
} catch (e) {
    console.log(e);
}
