const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
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


module.exports = router;