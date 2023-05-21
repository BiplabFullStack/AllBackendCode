
const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser")
const localStorage = require("localStorage")
const app = express();
const PORT = 8000;
const hostName = "127.0.0.1";
app.use(bodyParser.urlencoded({ extended: true }));




// ----------------------------------------------------------  GET API  --------------------------------------------------------------

app.get("/login", (req, res, next) => {
    res.send(`<form action='/' method="POST" onsubmit="localStorage.setItem('username',document.getElementById('username').value)">
    <input type="text" name="username" id="username">
    <br/>
    <button type="submit">Submit</button>
    </form>`)

})


// ----------------------------------------------------------  POST API  --------------------------------------------------------------

app.post("/", (req, res, next) => {
    fs.readFile('biodata.txt', { encoding: 'utf-8' }, (err, data) => {
        if (err) {
            console.log(err);
        }
        //res.write(`<body> ${data} </body>`);
        res.send(`<body> ${data} </body><form action='/' method="POST" onsubmit="localStorage.setItem('username2').value = localStorage.getItem('username')">
    <input type="text" name="username2" id="username2">
    <br/>
    <button type="submit">Submit</button>
    </form>`)

        //const user = req.body.username
        const mess = req.body.username2
        const userName = localStorage.getItem('username')

        const chatdata = `${userName}:${mess}`
        fs.appendFile("biodata.txt", chatdata, (err) => {
            if (err) {
                console.log(err);
            }
        });

    })

})




// ---------------------------------------------------  WrongURL API -------------------------------------------------------------- 

app.all("/*", (req, res) => {
    res.status(404).send('<h1>Page Not Found</h1>')
})



// ---------------------------------------------------------  Listen -------------------------------------------------------------- 
app.listen(PORT, () => {
    console.log(`Server running at http://${hostName}:${PORT}/login`);
});
