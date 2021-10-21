import express from 'express';
import "dotenv/config"
import {router} from './routes/routes'
import http from 'http'
import { Server, Socket } from 'socket.io';
import cors from 'cors'

const app = express();
app.use(cors())
const httpServer = http.createServer(app)

const io = new Server(httpServer,{
  cors:{
    origin:"*"
  }
})

io.on('connection',socket=>{
  console.log(`user connected ao socket ${socket.id}`);
  
})
app.use(express.json())
app.use(router) 

app.get('/github',(req,res)=>{
  console.log(process.env.GITHUB_CLIENT_ID);
  res.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`)
})
 

app.get('/signin/callback',(req,res)=>{

  const {code} = req.query
  return res.json(code)

})

export {httpServer,io}