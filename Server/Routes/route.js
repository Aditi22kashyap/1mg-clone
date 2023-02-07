const express = require('express');
const product = require('../Models/model');
const router = express.Router();

router.get('/products', async (req,res)=>{
    try{
        
        const category = req.query.category;
        const q = req.query.q ;
        if(category){
            const data = await product.find();
            const filteredProducts = data.filter(product => product.category === category);
            res.status(200).send(filteredProducts);
        }
        else if(q){
            const searchdata = await product.find({
                title : {$regex: q , $options: 'i'}
            }) 
            res.status(200).send(searchdata);
        }
        
    }
    catch(err){
        res.status(400).send({error : err.message});
    }
  
})
router.get('/products/:id', async(req,res)=>{
    const id = req.params.id ;
    const data = await product.findById(id);
    res.status(200).send(data);
})

module.exports = router ;