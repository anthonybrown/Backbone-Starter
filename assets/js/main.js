requirejs.config({
    paths: {
        'jquery': 'libs/jquery',
        'underscore': 'libs/underscore',
        'backbone': 'libs/backbone'
    }
    shim: {
        'libs/underscore': {
            exports: '_'
        },
        'libs/backbone': {
            deps: ['libs/underscore', 'libs/jquery'],
            exports: 'Backbone'
        }
    }
});