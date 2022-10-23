let fs = require('fs');

///write file
// fs.writeFile('myfile.txt','NodeJs is fs package',()=>{
//     console.log('file created')
// })


// fs.appendFile('myCode.txt','NodeJs is fs package \n',()=>{
//     console.log('file created')
// })


// fs.readFile('myCode.txt','utf-8',(err,data) => {
//     if(err) throw err;
//     console.log(data)
// })

// fs.rename('myCode.txt','myfirst.txt',(err,data)=>{
//     if(err) throw err;
//     console.log('File Renamed')
// })


fs.unlink('myFile.txt',(err,data)=>{
        if(err) throw err;
        console.log('File Deleted')
})