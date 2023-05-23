const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const controllerpart = require('../controller/contactc')

const router = express.Router();

// /admin/add-product => GET
router.get('/contactUs', controllerpart.getcontact);

// /admin/add-product => POST
router.post('/contactUs', controllerpart.postcontact);

module.exports = router;
