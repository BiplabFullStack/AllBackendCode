//1 .Why are we using Express JS ? Any reasons?
/* Ans : ExpressJs is a framework of nodejs. It is very easy to under stand and less line of code compare to the Node.js.
         and When we head the api its automatically set the SetHeader content type of the document and when we write any API not 
         need to require if else statement */

//2. What are middlewares ?
/* Ans : Middleware is a software that acts as an intermediary between two applications or services to facilitate their 
        communication.*/

//3.What is next used for?
/*  Ans: next is a parameter of the middleware, its represent the when its middleware run and then run the next middle ware if we not write 
    next() the next middleware is not run */

//4.What is res.send used for?
/* Ans : its send the response from the backend to the frontend */

//5. If i do res.send('<h1> hello to node js </h1>') . What will be the content-type header equal to.
     //Ans : Text/HTML

//6. If I do res.send( { key1: value }) . What will be the content-type header equal to.
     //Ans : Text/HTML

//7. What does app.listen(3000) do behind the scenes ?
    //Ans : Server is run at port 3000

const express = require("express");
const app = express();
const PORT =8000;
const hostName ="127.0.0.1"


app.use((req,res, next)=>{
    console.log("I am the 1St Middle wire");
    next();
})

app.use((req, res, next)=>{
    console.log("I am the 2nd Middle wire");
    res.send("<h1>I am the 2nd Middle wire</h1>")
})

app.listen(PORT,()=>{
    console.log(`Server is Running at http://${hostName}:${PORT}/`);
})