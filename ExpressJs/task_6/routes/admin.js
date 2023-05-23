const path = require('path');

const express = require('express');

//const rootDir = require('../util/path');
const controllerpart = require('../controller/adminc')

const router = express.Router();


// /admin/add-product => GET
router.get('/add-product', controllerpart.adminget);

// /admin/add-product => POST
router.post('/add-product', controllerpart.adminpost);

module.exports = router;
