/*
 * The Main Boilerplate JavaScript Application
 */
define('modalVC', ['app', 'bootstrap', 'jquery'], function (app, bootstrap, $) {
        'use strict';

        /**
         * DOM jQuery Handles
         */
        var $doc,
            $body,
            $window,
            $curtain,
            $modalRoot;

        /**
         * URL
         */
        var modalUrl;

        /**
         * Initialize
         */
        function initialize() {

            // VARIABLES
            $doc = $(document);
            $body = $('body');
            $curtain = $('#curtain');
            $window = $(window);
            $modalRoot = $('#modalDynamic');

            // EVENTS
            $doc
                .on('click', 'a.subview-modal', function (evt) {
                    load($(this).attr('href'));
                    evt.preventDefault();
                })
                .on('submit', 'form.subview-modal', function (evt) {
                    formSubmit($(this));
                    evt.preventDefault();
                });
            /*
             .on('click', '#modalDynamic .choice', function (evt) {
             send($(this).attr('data-target-url'), $(this).attr('data-modal-continue'));
             })
             .on('modal-loader-processing', function (evt) {
             alert("TEST CONDITION A");
             })
             .on('modal-done', function (evt) {
             alert("TEST CONDITION 84115");
             })
             */

            // Register hashchange hook
            app.bindToRouteUpdate(function (evt) {
                // TODO: Implement routes for modal VC frontend
//                routeUpdated(evt.route);
            });

        }

        /**
         *
         */
        function routeUpdated(hash) {
//            console.log('routeUpdated("' + hash + ')');

            // if hash invalid, bounce early null
            if (typeof hash == "undefined" || !hash || !(hash.length > 1))
                return null;

            // prepare for regex
            var n;

            // TODO: Implement routes for modal frontend
            /*
             // if we have a hashtag route folder/#/item/#/file/# - expand all the folders leading up to it, then select and open the item, then open the asset
             n = hash.match(/\/folder\/([0-9]+)\/item\/([0-9]+)\/file\/([0-9]+)/i);
             if (n)
             return deeplinkOpenTarget(n[1], n[2], n[3]);
             */

            // else nothing
            return null;
        }

        /**
         *
         * @param $form
         */
        function formSubmit($form) {
            var method = $form.attr('method')
            if (method.length && method.toUpperCase() == 'GET')
                load($form.attr('action') + '?' + $form.serialize());
            else
                load($form.attr('action'), $form.serializeArray());
        }

        /**
         *
         * @param url
         * @param data
         * @param method
         */
        function load(url, data) {
            url = app.addParamToUrl(url, 'layout', 'modal');

            if ($modalRoot.hasClass('in'))
                showLoader('processing');
            else
                showLoader('loading');

            modalUrl = url;
            if (typeof data != 'undefined')
                $modalRoot.load(url, data);
            else
                $modalRoot.load(url);


            $modalRoot.modal({});
        }


        /**
         *
         */
        function send(target, modalContinue) {
            console.log(target, modalContinue);
            if (typeof modalContinue == 'undefined')
                modalContinue = false;
            showLoader('processing');
            if (modalContinue)
                $modalRoot.load(target);
            else
                $.ajax({
                    url: target,
                    success: function () {
                        done(true);
                    },
                    fail: function () {
                        done(false);
                    }
                })
        }

        /**
         *
         * @param success
         */
        function done(success) {
            $modalRoot.modal('hide');
        }

        /**
         *
         */
        function modalOppAttributeShow(modalId) {
        }

        /**
         *
         */
        function showLoader(text) {
            $modalRoot.html(
                '<div class="modal-dialog loader dashboard"><div class="modal-content"><div class="modal-body">'
                    + '<div class="wheel"><p>' + text + '</p></div></div>'
                    + '</div></div>'
            );
        }

        return {
            initialize: initialize
        };

    }

)
;