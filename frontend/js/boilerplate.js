/*
 * The Main Boilerplate JavaScript Application
 */
define('boilerplate', ['app', 'jquery', 'fullcalendar', 'highcharts', 'bootstrap'], function (app, $, fullcalendar, highcharts, bootstrap) {
    'use strict';

    /**
     * DOM jQuery Handles
     */
    var $doc,
        $body,
        $window,
        $curtain,
        $calendar;

    /**
     * Initialize
     */
    function initialize() {

        // VARIABLES
        $curtain = $('#curtain');
        $window = $(window);
        $calendar = $('#calendar');

        // CALENDAR
        initCalendar();

        // CHARTS
        initCharts();

        // EVENTS
        /*
         $doc
         .on('click', '.uncompare', function (evt) {
         $(evt.currentTarget).parent().parent().remove();
         })
         .on('click', '.embedLink,.close', function (e) {
         e.preventDefault();
         if ($embed.hasClass('visible')) {
         trackEvent('embed', 'open');
         $embed.animate({bottom: '-200px'}, 'slow').removeClass('visible');
         } else {
         trackEvent('embed', 'close');
         $embed.animate({bottom: '0px'}, 'slow').addClass('visible');
         }
         });
         */

        start();
    }

    /**
     *
     */
    function initCalendar() {
        if (!$calendar.length)
            return;
        $calendar.fullCalendar({
            dayClick: function () {
                alert('a day has been clicked!');
            }
        });
    }

    /**
     *
     */
    function initCharts() {
        initChartPlaceholder('one');
        initChartPlaceholder('two');
        initChartPlaceholder('three');
        initChartPlaceholder('four');
        initChartPlaceholder('five');
    }

    /**
     *
     */
    function initChartPlaceholder(id) {
        if (!$('.chart#' + id).length)
            return null;

        return new highcharts.Chart({
            chart: {
                renderTo: id,
                margin: [0, 0, 0, 0],
                backgroundColor: null,
                plotBackgroundColor: 'none'

            },

            title: {
                text: null
            },

            tooltip: {
                formatter: function () {
                    return this.point.name + ': ' + this.y + ' %';

                }
            },
            series: [
                {
                    borderWidth: 2,
                    borderColor: '#F1F3EB',
                    shadow: false,
                    type: 'pie',
                    name: 'SiteInfo',
                    innerSize: '50%',
                    data: [
                        { name: 'Visits', y: 65.0, color: '#d84436' },
                        { name: 'Rest', y: 35.0, color: '#babab8' }
                    ],
                    dataLabels: {
                        enabled: false,
                        color: '#000000',
                        connectorColor: '#000000'
                    }
                }
            ]
        });

    }


    /**
     * Start the application
     */
    function start() {
        // TODO: Stuff
        openCurtain();
    }

    /**
     * Ready to go; open the curtains
     */
    function openCurtain() {
        // Open the curtains
        $curtain.delay(100).fadeOut(1000);
    }

    /**
     * EXPORTS
     */
    return {
        initialize: initialize,
    };

});