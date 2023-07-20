const http = require('http');
//node js exports globally
//require keyboard is to implement file in nodejs

// function rqListner(req,res){

// }
// http.createServer(rqListner);

const server =http.createServer((req,res)=>{
    console.log("Harsh");
})
server.listen(4000);