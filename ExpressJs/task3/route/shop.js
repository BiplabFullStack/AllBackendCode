
const express = require("express")
const path = require("path")
const route = express.Router();

const shopPath = path.join(__dirname, "../views/shop.html")

route.get('/', (req, res, next) => {
    //res.send('<h1>Hello from Express!</h1>');
    res.sendFile(shopPath)
});

route.all("/*",(req, res)=>{
    res.status(404).send("<h1>Page not found, Kuch too Locha haa Daya</h1>")
})

module.exports = route;   

