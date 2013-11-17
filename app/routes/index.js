/*
 * GET home page.
 */

exports.index = function (req, res) {
    res.render('index', { title: 'The Outright Mental Web Application' });
};