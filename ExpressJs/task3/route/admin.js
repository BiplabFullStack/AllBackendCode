
const express = require("express")
const path = require("path")
const route = express.Router();
const adminpath =path.join(__dirname, "../views/add-product.html");
route.get('/add-product', (req, res, next) => {
    //res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title", placeholder="Enter your name"> <input type="number", placeholder="Product of the Size" name="title"><button type="submit">Add Product</button></form>');
    res.sendFile(adminpath)
});

route.post('/add-product', (req, res, next) => {
    //console.log(JSON.parse(JSON.stringify(req.body)));
    console.log(req.body);
    res.redirect('/');

});
module.exports = route; 
