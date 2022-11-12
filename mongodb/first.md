https://www.mongodb.com/try/download/community

//////
> Create one folder by the name of data in C drive
> Create one folder by name of db inside data
> C:\data\db

> Unstructred database
> NoSql


RollNo | Hindi | English | Computer
  1    |  80   |         |
  2    |       |   70    |
  3    |  88   |         |
  4    |  78   |         |   90
  

[
    {
        rollNo:1,
        Hindi:80
    },
    {
        rollNo:2,
        English:70
    },
    {
        rollNo:3,
        Hindi:88
    },
    {
        rollNo:4,
        Hindi:88,
        Computer:90
    }
]


Terminology

SQL         NoSQL
Database    Database
Table       Collection
Row         Document
Select      Find
Insert      Insert
Update      Update
Delete      Remove


//Start mongodb server
# window
> open cmd
> go inside c:\program Files\mongodb\5.6\server\bin
> mongod
(27017)
* Do not cloase this cmd

//Start mongodb client
> Open new cmd
> go inside c:\program Files\mongodb\5.6\server\bin
> mongo

//Start mongodb server
# mac
> open terminal
> mongod --dbpath data/db
(27017)
* Do not close this terminal

//Start mongodb client
> Open new terminal
> mongo

// to See all the database
> show dbs

// to inside any db
> use database name

// to see all the collections
> show collections

//to see all the records
> db.collectionName.find()


////////////////////////////////////////////////////////////////
//to create database
> use dbname

//step to insert data in mongo
db.collectionName.insert();

db.city.insert({name:'London'})
db.city.insert({name:'Amsterdam'})
db.city.insert({_id:1,name:'Mumbai'})
db.city.insert({_id:2,name:'Paris'})

_id primary key
> every record will hve _id

_id 12 bytes
5 bytes > Random Number
3 bytes > Series
4 bytes > timestamp


// data on the basis of condition
db.collectionName.find({condition})

db.restaurants.find({state_id:2,"average_rating" : 4.5}).pretty()

db.restaurants.find({"mealTypes.mealtype_id":2}).pretty()

db.restaurants.find({$and:[{cost:{$gt:100,$lt:500}}]}).pretty()

db.collectionName.find({condition}).sort({cost:-1})


db.collectionName.find({condition}).limit(5)


db.collectionName.find({condition}).skip(10).limit(5)

db.collectionName.find({meal_id:{$in:[5,8,9]}})

db.collectionName.update(
    {orderId:3},
    {
        $set:{
            "status":"Delivered"
        }
    }
)

db.collectionName.update(
    {orderId:3},
    {
        $unset:{
            "status":1
        }
    }
)

///delete all the values
db.orders.remove({})

db.orders.remove({orderId:1})

Network Access
> 0.0.0.0/0

Database Access
> Create new user