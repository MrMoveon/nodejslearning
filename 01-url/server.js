// let http =require('http');
// http.createServer((req,res)=>{
//     res.writeHead(200,{'content-type':'text/plan'})
//     res.end('hello world!!!!!');
// }).listen(1337,'127.0.0.1');

// console.log('server running')


let http =require('http');
let server=http.createServer((req,res)=>{
     res.writeHead(200,{'content-type':'text/plan'})
     res.end('hello world!!!!!');
})
server.listen(1337,'127.0.0.1');
console.log('server running http://127.0.0.1:1337')