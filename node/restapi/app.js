let express = require('express');
let app = express();
let dotenv = require('dotenv');
dotenv.config()
let port = process.env.PORT || 7800;
let mongo = require('mongodb');
let MongoClient = mongo.MongoClient;
let mongoUrl = process.env.MongoURL;
let db;

app.get('/',(req,res) => {
    res.send('Hii from Express')
})

// list of location
app.get('/location',(req,res)=>{
    db.collection('location').find().toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
})

app.get('/restaurants',(req,res)=>{
    let stateId = Number(req.query.stateId);
    let mealId = Number(req.query.mealId)
    let query = {}
    if(stateId){
        query = {state_id:stateId}
    }else if(mealId){
        query = {"mealTypes.mealtype_id":mealId}
    }else{
        query = {}
    }
    db.collection('restaurants').find(query).toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
})

// // list of restaurants
// app.get('/restaurants/:stateId',(req,res)=>{
//     let stateId = Number(req.params.stateId)
//     db.collection('restaurants').find({state_id:stateId}).toArray((err,result) => {
//         if(err) throw err;
//         res.send(result)
//     })
// })

// list of mealType
app.get('/mealType',(req,res)=>{
    db.collection('mealType').find().toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
})



//connection with db
MongoClient.connect(mongoUrl,(err,client) => {
    if(err) console.log('Error while connecting');
    db = client.db('internfeb');
    app.listen(port,()=>{
        console.log(`Server is running on port ${port}`)
    })

})

