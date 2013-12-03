/* global $ */
/* global moment */
/* global Countdown */
(function () {
  'use strict';

  var then = moment('2014-07-02T00:00:00-00:00');
  var now = moment();

  $(document).ready(function () {

    return new Countdown(then.diff(now),
      function () {
        $('#fromNow').html(then.fromNow());
        // $('#countdown').html(seconds + ' seconds'); //log the number of seconds that have passed
      },
      function () {
        $('#fromNow').html('now'); //log that the countdown has complete
      }
    );

  });
}());

