const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../config');
const User = require('../model/userModel');

router.use(bodyParser.urlencoded({extended:true}));
router.use(bodyParser.json());

//get All users
router.get('/users',(req,res) => {
    User.find({},(err,data) => {
        if(err) throw err;
        res.send(data)
    })
})

//registerUser
router.post('/register',(req,res) => {
    User.find({email:req.body.email},(err,data) => {
        if(err) throw err;
        if(data.length>0){
            res.send('Email already Taken')
        }else{
                // encrypt password
                let hashpassword = bcrypt.hashSync(req.body.password,8);
                User.create({
                    name:req.body.name,
                    email:req.body.email,
                    password:hashpassword,
                    phone:req.body.phone,
                    role:req.body.role?req.body.role:'User'
    
                },(err,data) => {
                    if(err) return res.send('Error While Register');
                    res.send('Registion Successful')
                })
        }
    })
})

//loginUser
router.post('/login',(req,res) => {
    User.findOne({email:req.body.email},(err,user) => {
        if(err) return res.send({auth:false,token:'Error while Logging'});
        if(!user) return res.send({auth:false,token:'No User Found'});
        else{
            const passIsValid = bcrypt.compareSync(req.body.password,user.password)
            if(!passIsValid) return res.send({auth:false,token:'Invalid Password'})
            // in case both valid
            let token = jwt.sign({id:user._id},config.secret,{expiresIn:86400})//24 hr
            res.send({auth:true,token:token})
        }
    })
})

//userInfo
router.get('/userInfo',(req,res) => {
    let token = req.headers['x-access-token'];
    if(!token) res.send({auth:false,token:'No Token Provided'});
    //jwt verify
    jwt.verify(token,config.secret,(err,user) => {
        if(err) return res.send({auth:false,token:'Invalid Token'});
        User.findById(user.id,(err,result) => {
            res.send(result)
        })
    })
})


module.exports = router;