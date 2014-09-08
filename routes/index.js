
/*
 * GET home page.
 */

exports.index = function (req, res) {
    res.render('index', {
        title: 'Sample Node.js Express with JQUERY ajax call.'
    });
};
