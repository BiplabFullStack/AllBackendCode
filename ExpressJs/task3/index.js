
const express = require('express');
const bodyParser = require('body-parser');
const adminroute =require("./route/admin")
const shop =require("./route/shop")
const app = express();
const PORT =8000
const hostName = "127.0.0.1"

app.use(bodyParser.urlencoded({extended: true}));
app.use('/admin', adminroute)
app.use(shop)

app.listen(PORT, ()=>{
    console.log(`Server running at http://${hostName}:${PORT}/admin/add-product`);
});  
