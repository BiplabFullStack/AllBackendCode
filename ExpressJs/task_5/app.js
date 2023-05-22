const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const hostname ='127.0.0.1';
const PORT = 8000;

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactRoutes =require('./routes/contact');
const successRoutes =require('./routes/success');

app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(contactRoutes);
app.use(successRoutes);
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(PORT,()=>{
    console.log(`Server running at http://${hostname}:${PORT}/admin/add-product`);
});
