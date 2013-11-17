define('app', [
    'jquery',
    'history',
    'jqueryHashChange',
    'underscore',
    'bootstrap'
], function ($) {

    /**
     *
     */
    var $body;

    /**
     *
     */
    function initialize() {
        $body = $('body');
        initConfig();
        initSubview();
    }

    /**
     * Get the configuration from <BODY data-config-xxx="yyy"> attributes
     */
    function initConfig() {
        for (var key in config)
            config[key] = $body.attr('data-config-' + key);
//        console.log("Main App loaded config", config);
    }

    /**
     *
     */
    function initSubview() {
        window.History.Adapter.bind(window, 'popstate', function () {
            // Trigger all events bound to route update
            $(window).trigger({
                type: "route_updated",
                route: window.location.pathname
            });
        });
        /*
         // For Debuging Only: Alerts every time the hash changes!
         bindToRouteUpdate(function () {
         alert('GLOBAL HASH CHANGE: ' + location.hash);
         });
         */
    }


    /**
     * @param myFunction
     */
    function bindToRouteUpdate(myFunction) {
        $(window).bind('route_updated', myFunction);
    }

    /**
     *
     * @param route with leading slash, e.g. /cloud/folder/25
     */
    function routeUpdate(route) {
        // Update the Browser URL (= Route appended to Base URL)
        if (history.pushState) {
            history.pushState(null, null, config.baseUrl + route);
        }
        else {
            location.hash = '#' + route;
        }
        // Trigger all events bound to route update
        $(window).trigger({
            type: "route_updated",
            route: route
        });
    }

    /**
     * Config
     * @type {{
     *  baseUrl:string NO TRAILING SLASH
     * }}
     */
    var config = {
        baseUrl: ''
    };

    /**
     *
     * @param url
     * @param name
     * @param value
     */
    function addParamToUrl(url, name, value) {
        return url + ((url.indexOf("?") >= 0) ? '&' : '?'  ) + name + '=' + value;
    }

    /**
     * EXPORTS
     */
    return {
        initialize: initialize,
        config: config,
        addParamToUrl: addParamToUrl,
        bindToRouteUpdate: bindToRouteUpdate,
        routeUpdate: routeUpdate
    };
});
