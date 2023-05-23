const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();
const controllerpart = require('../controller/shopc')

router.get('/', controllerpart.getshop);

module.exports = router;
