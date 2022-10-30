let express = require('express');
let app = express();
let port = 7800;

app.get('/',(req,res) => {
    res.send('Hii from Express')
})

app.get('/location',(req,res)=>{
    res.send('This is from location')
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})