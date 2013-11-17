// This is the runtime configuration file.  It complements the Gruntfile.js by
// supplementing shared properties.
require.config({
    paths: {
        // Application
        "app": 'js/app.min',
        "boilerplate": 'js/boilerplate.min',

        // ViewControllers
        'modalVC': 'js/viewControllers/modalVC.min',

        // Modules
        "jqueryHashChange": "js/modules/jqueryHashChange.min",

        // Map remaining vendor dependencies.
        "almond": "vendor/almond/almond",
        /*
         "backbone": "vendor/backbone/backbone",
         */
        "bootstrap": "vendor/bootstrap/dist/js/bootstrap.min",
        "bootstrapDropdown": "vendor/bootstrap-js-dropdown/index",
        "fullcalendar": "vendor/fullcalendar/fullcalendar.min",
        "highcharts": "vendor/highcharts/highcharts",
        "history": "vendor/history.js/scripts/bundled/html4+html5/jquery.history",
        "jquery": "vendor/jquery/jquery",
        /*
         "jqueryUI": "vendor/jquery-ui/ui/minified/jquery-ui.min",
         */
        "mediator": "vendor/mediator-js/mediator.min",
        "modernizr": "vendor/modernizr/modernizr",
        "moment": "vendor/momentjs/min/moment.min",
        "text": "vendor/requirejs-text",
        "underscore": "vendor/underscore/underscore-min"
        /*
         ,
         "jqueryFileUpload":"vendor/blueimp-file-upload/js/jquery.fileupload"
         */
    },
    shim: {
        // This is required to ensure Backbone works as expected within the AMD
        // environment.
        /*
         "backbone": {
         // These are the two hard dependencies that will be loaded first.
         deps: ["jquery", "underscore"],

         // This maps the global `Backbone` object to `require("backbone")`.
         exports: "Backbone"
         },
         */
        app: ["jquery", "underscore", "bootstrap" /* ,"jqueryFileUpload" */],
        /*
         jqueryFileUpload: ["jquery","jqueryUI"],
         */
        boilerplate: ["app", "jquery", "fullcalendar", "highcharts"],
        bootstrap: ["jquery"],
        fullcalendar: ["jquery"],
        jqueryHashChange: ["jquery"],
        /*
         jqueryUI: {
         "exports": "jquery.ui",
         "deps": [ "jquery"]
         },
         */
        highcharts: {
            "exports": "Highcharts",
            "deps": [ "jquery"]
        },
        history: {
            deps: ["jquery"],
            exports: 'history'
        },
        'underscore': {
            exports: '_'
        }
    },
    urlArgs: "bust=" + (new Date()).getTime()
});