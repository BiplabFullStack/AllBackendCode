const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

// /admin/add-product => GET
router.get('/contactUs', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'contact.html'));
});

// /admin/add-product => POST
router.post('/contactUs', (req, res, next) => {
  console.log(req.body.name);
  console.log(req.body.email);
  res.redirect('/success');
});

module.exports = router;
