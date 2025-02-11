const fs = require('fs');
const data = "I ma new data 2"
fs.writeFile("./mydir/data.txt",data,(err)=>{
    if(err) throw err;
    console.log("File created successuflly");
})