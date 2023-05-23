const path = require('path');
const rootDir = require('../util/path');


exports.adminget =(req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
}

exports.adminpost =(req, res, next) => {
    console.log(req.body);
    res.redirect('/');
}