import express  from "express";
import todosRouter from './router/todos'
import bodyParser from 'body-parser'



const app =express();
app.use(todosRouter)
app.use(bodyParser.json())
app.listen(3000);