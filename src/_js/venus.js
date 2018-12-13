window.Popper = require('popper.js').default;

try {
<<<<<<< HEAD
    window.Popper = require('popper.js').default;
    window.$ = window.jQuery = require('jquery');
    require('bootstrap');
    require('o2system-espresso/src/espresso.js');
    // require('owl.carousel');
=======
    
    window.$ = window.jQuery = require('jquery');

    require('bootstrap');
>>>>>>> turahe
    require('./custom.js');
    require('./custom-bootstrap.js');
} catch (e) {
    console.log(e);
}
