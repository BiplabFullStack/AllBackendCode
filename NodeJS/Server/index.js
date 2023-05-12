const http = require("http")
const server = http.createServer((req, res)=>{
    if(req.url === "/home"){
        res.end("<h1>Welcome to Home Page</h1>")
    }else if(req.url === "/about"){
        res.end("<h1>Welcome to AboutUs Page</h1>")
    }else if(req.url === "/node"){
        res.end("<h1>Welcome to NodeJS Page</h1>")
     }
     else{
        res.writeHead(404,{"content-type":"text/HTML"})
        res.end("<h1> 404 error, page not found</h1>")
    }
});

server.listen(8000,"127.0.0.1",()=>{
    console.log("Listening to the port no 8000");
});