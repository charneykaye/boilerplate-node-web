'use strict';

/**
 *
 * @param req
 * @param res
 */
exports.init = function (req, res) {
    if (req.isAuthenticated())
        res.redirect(302,'/account/');
    res.render('index');
};
