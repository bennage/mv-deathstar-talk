requirejs.config({
    paths: {
        'text': '/requirejs-text/text',
        'durandal':'/durandal/js',
        'plugins' : '/durandal/js/plugins',
        'transitions' : '/durandal/js/transitions',
        'knockout': '/knockout.js/knockout',
        'jquery': '/jquery/jquery'
    }
});

define(['durandal/system', 'durandal/app', 'durandal/viewLocator'],  function (system, app, viewLocator) {
    //>>excludeStart("build", true);
    system.debug(true);
    //>>excludeEnd("build");

    app.title = 'Ponypedia';

    app.configurePlugins({
        router:true
    });

    app.start().then(function() {
        //Show the app by setting the root view model for our application with a transition.
        app.setRoot('shell', 'entrance');
    });
});