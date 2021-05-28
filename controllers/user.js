require("dotenv").config()
const User = require ("../models/User");
const jwt = require ("jsonwebtoken");
const bcrypt = require ("bcrypt");
const {Router} = require("express");
const router = Router ();
const {SECRET} = process.env;

//create a USER
router.post("/signup", async (req, res) => {
    try {
        req.body.password = await bcrypt.hash(req.body.password, 10);
        const newUser = await User.create(req.body);
        res.status(200).json (newUser);
    } catch (error){
        res.status(400).json({error});
    }
});

//USER login
router.post("/login", async (req, res) => {
    try{
        const {username, password} = req.body
        const user = await User.findOne({username});
        if (user){
            const match = await bcrypt.compare(password, user.password)
            if (match){
                const token = await jwt.sign ({username}, SECRET)
                res.status(200).json({token})
            } else{
                res.status(400).json({error: "PASSWORD DOES NOT MATCH"})
            }
        }else{
            res.status(400).json ({error: "USER DOES NOT EXIST"})
        }
    } 
    catch (error){
        res.status(400).json({error});
    }
})


module.exports = router