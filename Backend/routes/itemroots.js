const express = require('express');
const Item = require('../models/item');
const router = express.Router();

router.get('/product',async(req,res)=>{
    try {
        const items = await Item.find();
        res.send(items);
    } catch (error) {
        res.send(`error : ${error}`)
        
    }
})

module.exports = router;