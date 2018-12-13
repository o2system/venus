window.Popper = require('popper.js').default;

try {
    window.$ = window.jQuery = require('jquery');
    require('bootstrap');
    require('./custom.js');
    require('./custom-bootstrap.js');
} catch (e) {
    console.log(e);
}
