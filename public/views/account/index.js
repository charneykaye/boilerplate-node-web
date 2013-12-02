(function () {
    'use strict';
    $('.day-of-year').text(moment().format('DDD'));
    $('.day-of-month').text(moment().format('D'));
    $('.week-of-year').text(moment().format('w'));
    $('.day-of-week').text(moment().format('d'));
    $('.week-year').text(moment().format('gg'));
    $('.hour-of-day').text(moment().format('H'));
}());

$(document).ready(function () {
    var then = moment('2014-07-02T00:00:00-00:00');
    countdown();
    setInterval(countdown, 1000);
    function countdown() {
        var now = moment(); // get the current moment
        var delta = then.diff(now);
        var months = Math.floor(moment.duration(delta).asMonths());
        var days = Math.floor(moment.duration(delta).asDays());

        /*
        delta = delta.subtract('months', months).subtract('days');

        var days = Math.floor(moment.duration(delta).asDays());
        delta = delta.subtract('days', days);

        var hours = Math.floor(moment.duration(delta).asHours());
        delta = delta.subtract('hours', hours);

        var minutes = Math.floor(moment.duration(delta).asMinutes());
        delta = delta.subtract('minutes', minutes);

        var seconds = Math.floor(moment.duration(delta).asSeconds());
        */

        // populate html
        $('#countdown').html(
            '<p><span class="num">' + months + '</span> months</p>' +
                '<p><span class="num">' + days + '</span> days</p>' +
                    /*
                '<p><span class="num">' + hours + '</span> hours</p>' +
                '<p><span class="num">' + minutes + '</span> minutes</p>' +
                '<p><span class="num">' + seconds + '</span> seconds</p>' +
                */
                ''
        );
    }

});