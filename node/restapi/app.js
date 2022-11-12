let express = require('express');
let app = express();
let dotenv = require('dotenv');
dotenv.config()
let port = process.env.PORT || 7800;
let mongo = require('mongodb');
let MongoClient = mongo.MongoClient;
let mongoUrl = process.env.LiveMongo;
let cors = require('cors')
let bodyParser = require('body-parser')
let db;

//middleware
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors())


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

app.get('/filter/:mealId',(req,res) => {
    let query = {};
    let sort = {cost:1}
    let mealId = Number(req.params.mealId);
    let cuisineId = Number(req.query.cuisineId);
    let lcost = Number(req.query.lcost);
    let hcost = Number(req.query.hcost);

    if(req.query.sort){
        sort={cost:req.query.sort}
    }

    if(hcost && lcost && cuisineId){
        query={
            "mealTypes.mealtype_id":mealId,
            $and:[{cost:{$gt:lcost,$lt:hcost}}]
        }
    }
    else if(hcost && lcost){
        query={
            "mealTypes.mealtype_id":mealId,
            $and:[{cost:{$gt:lcost,$lt:hcost}}]
        }
    }
    else if(cuisineId){
        query={
            "mealTypes.mealtype_id":mealId,
            "cuisines.cuisine_id":cuisineId
        }
    }else{
        query={
            "mealTypes.mealtype_id":mealId
        }
    }
    db.collection('restaurants').find(query).sort(sort).toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
})


app.get('/details/:restId',(req,res)=>{
    let restId = Number(req.params.restId)
    db.collection('restaurants').find({restaurant_id:restId}).toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
})

app.get('/menu/:id',(req,res)=>{
    let id = Number(req.params.id)
    db.collection('menu').find({restaurant_id:id}).toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
})



// list of mealType
app.get('/mealType',(req,res)=>{
    db.collection('mealType').find().toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
})

// order
app.get('/orders',(req,res)=>{
    //let email = req.query.email
    let email = req.query.email;
    let query = {}
    if(email){
        //query={email:email}
        query={email}
    }else{
        query={}
    }
    db.collection('orders').find(query).toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
})

//placeorder
app.post('/menuItem',(req,res) => {
    if(Array.isArray(req.body.id)){
        db.collection('menu').find({menu_id:{$in:req.body.id}}).toArray((err,result) => {
            if(err) throw err;
            res.send(result)
        })
    }else{
        res.send('Invalid Input')
    }
    
})

//placeorder
app.post('/placeOrder',(req,res) => {
    db.collection('orders').insert(req.body,(err,result) => {
        if(err) throw err;
        res.send('Order Placed')
    })
})

//updateOrder
app.put('/updateOrder/:id',(req,res) => {
    let oid = Number(req.params.id);
    db.collection('orders').updateOne(
        {id:oid},
        {
            $set:{
                "status":req.body.status,
                "bank_name":req.body.bank_name,
                "date":req.body.date
            }
        },(err,result) => {
            if(err) throw err;
            res.send('Order Updated')
        }
    )
})


//deleteOrder
app.delete('/deleteOrder/:id',(req,res) => {
    let _id = mongo.ObjectId(req.params.id);
    db.collection('orders').remove({_id},(err,result) => {
        if(err) throw err;
        res.send('Order Deleted')
    })
})


//connection with db
MongoClient.connect(mongoUrl,(err,client) => {
    if(err) console.log('Error while connecting');
    db = client.db('sepintern');
    app.listen(port,()=>{
        console.log(`Server is running on port ${port}`)
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

