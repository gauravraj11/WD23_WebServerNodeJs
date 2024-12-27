const http = require('http');
const fs = require('fs');

const Port =  9000;
const data1 = fs.readFileSync('./index.html','utf8', (err,data)=>{
    return data;
})
const data2 = fs.readFileSync('./about.html','utf8', (err,data)=>{
    return data;
})
const data3 = fs.readFileSync('./contact.html','utf8', (err,data)=>{
    return data;
})

const server = http.createServer((req,res)=>{

    if(req.url === '/'){
        res.end(data1)
    }else if(req.url === '/about'){
        res.end(data2)
    }else if(req.url === '/contact'){
        res.end(data3)
    }else if(req.url === '/:id'){
        console.log(req.params.id);
        res.end("invalid route")
    }
    // res.write(data1)
    // res.end();
    
})

server.listen(Port, ()=>{
    console.log(`Server running on ${Port}`);
    
} )




// console.log(req.ip);
    // console.log(req.url);
    // console.log(req.method);
    // console.log(req.Hostname);
    // console.log(req.headers);
    // res.write("Gaurav Raj");
    // res.write(JSON.stringify({"name":"wd5", "students": "Genius"}));
          // res.writeHead(200,{'Content-Type': 'text/plain'} )