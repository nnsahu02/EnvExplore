const express = require("express");
const router = express.Router();
const { userData, CreateUser, getUserByName } = require("../Controller/userController");

router.get('/users', userData)

router.post('/users', CreateUser)

router.get('/users/:name', getUserByName)

router.get('/', (req, res)=> {
    return res.status(200).send("Welcome to the project...")
})

router.all('/*',(req,res)=>{
    return res.status(400).send({status:false,msg:"Please give right path!!"})
})

module.exports = router;
