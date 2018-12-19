window.Popper = require('popper.js').default;

try {
    window.$ = window.jQuery = require('jquery');
    require('bootstrap');
    // require('o2system-espresso');
    require('./custom.js');
    require('./custom-bootstrap.js');
    require('./admin.js');
} catch (e) {
    console.log(e);
}
