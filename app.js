const http = require('http');

const express = require('express')

 const userrequesthandler = require("./one")

 const app = express();

 app.use((req,res,next) =>{
  console.log("came in first middleware ",req.url,req.method);
  next();
 })

  app.use((req,res,next) =>{
  console.log("came in second middleware ",req.url,req.method);
res.send("<p>Hello from Express!</p>")
 })


const server = http.createServer(app);

  const port = 3000;
server.listen(port, () => {
  console.log(`server running at http://localhost:${port}`)
});

