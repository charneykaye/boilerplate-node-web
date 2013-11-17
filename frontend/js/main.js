// Break out the application running from the configuration definition to
// assist with testing.
require(['js/config.min'], function () {
    // Kick off the application.
    require(['app', 'boilerplate', 'modalVC'], function (app, boilerplate, modalVC) {
        app.initialize();
        boilerplate.initialize();
        modalVC.initialize();
    });
});

