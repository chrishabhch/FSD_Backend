const http = require('http');

const server = http.createServer(async(req,res)=>{
    const data = await fs.readFile("http://dummyjson.com/products");
    res.setHeader("content-type","application/json");
    res.statusCode = 200;
    const newproducts = await data.json();
    console.log(newproducts)
    res.end(JSON.stringify(newproducts));

});

server.listen(9001,(err)=>{
    if(err)
        console.log(err);
    else
        console.log("serveris running on port 9001");
});