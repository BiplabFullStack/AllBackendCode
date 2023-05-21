const express = require("express");
const bodyParser = require("body-parser")
const fs = require("fs");
const app = express();
const hostName = "127.0.0.1";
const PORT = 8000;

app.use(bodyParser.urlencoded({ extended: true }));  //Use for data receive from frontend(Browser)

// ---------------------------------------------------  Login Page -------------------------------------------------------------------

app.get("/login", (req, res, next) => {
    res.send(`<form action='/' method="post" onsubmit="localStorage.setItem('username',document.getElementById('username').value)">
    <input type="text" name="username" id="username">
    <br/>
    <button type="submit">Submit</button>
    </form>`)

})



// -----------------------------------------------------  View Page(GET API)  --------------------------------------------------------

app.get("/", (req, res, next) => {
    fs.readFile('appdata.txt', "utf-8", (err, data) => {
        if (err) {
            console.log(err);
            data = "No chat Exists";
        }
        res.send(`<body>${data}</body><form action='/' method="post" onsubmit="document.getElementById('username').value = localStorage.getItem('username')">
        <input type="hidden" name="username" id="username">
        <input type="text" name="message" id="message">
        <br/>
        <button type="submit">Submit</button>
        </form>`)
    });


})


// ---------------------------------------------------  POST API  --------------------------------------------------------------------

app.post("/", (req, res, next) => {
    const userdata = req.body.username;
    //console.log(userdata);
    const msgdata = req.body.message;
    //console.log(msgdata);
    const fullData = `${userdata}:${msgdata}`
    fs.appendFile('appdata.txt', fullData, (err) => {
        if (err) {
            console.log(err);
        }
    })
    res.redirect("/");
})


// ---------------------------------------------------  Wrong URL  --------------------------------------------------------------------

app.all("/*", (req, res) => {
    res.status(404).send('<h1>Page Not Found</h1>')
})



// ---------------------------------------------------  Server Listen  -----------------------------------------------------------------

app.listen(PORT, () => {
    console.log(`Server Running at  http://${hostName}:${PORT}/login`);
})



