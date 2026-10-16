const http = require("http");
const port = process.env.PORT || 80;
http.createServer((req,res)=>res.end("Hello from AKS!")).listen(port);
