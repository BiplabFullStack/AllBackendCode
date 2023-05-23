const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();
const controllerpart = require('../controller/successc')

router.get('/success', controllerpart.getsuccess);

module.exports = router;