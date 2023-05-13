
const fs = require('fs');


const requiestHandeler = (req, res) => {
    const url = req.url;
    const method = req.method;
    const body = [];
    if (url === '/') {

        fs.readFile('message.txt', { encoding: 'utf-8' }, (err, data) => {
            if (err) {
                console.log(err);
            }
            res.write('<html>');
            res.write('<head><title>Enter Message</title><head>');
            res.write(`<body> ${data} </body>`);
            res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
            res.write('</html>');
            return res.end();
        })


    }
    else if (url === '/message' && method === 'POST') {

        req.on('data', (chunk) => {
            //console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, (err) => {
                console.log("Inside the message");
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });

    }
    else {


        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>My First Page</title><head>');
        res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
        res.write('</html>');
        res.end();
    }
};

// 1st away 
// module.exports = {
//     handeler :requiestHandeler,
//     sometext :"I am Biplab"
// }

//2nd away 
// module.exports.handeler =requiestHandeler
// module.exports.sometext ="I am Biplab"

//3rd away
exports.handeler =requiestHandeler
exports.sometext ="I am Biplab"

//4th away
let bio ="I am Biplab"
module.exports ={requiestHandeler,bio}