const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT =8000
const hostName = "127.0.0.1"

app.use(bodyParser.urlencoded({extended: false}));

app.use('/add-product', (req, res, next) => {
  res.send('<form action="/product" method="POST"><input type="text" name="title", placeholder="Enter your name"> <input type="number", placeholder="Product of the Size" name="title"><button type="submit">Add Product</button></form>');
 
});

app.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
   
});

app.use('/', (req, res, next) => {
  res.send('<h1>Hello from Express!</h1>');
});

app.listen(PORT, ()=>{
    console.log(`Server running at http://${hostName}:${PORT}/add-product`);
});