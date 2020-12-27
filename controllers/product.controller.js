const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { ProductSchema } = require('../models/product.model');

// => localhost:3000/products/
router.get('/', (req, res) => {
    ProductSchema.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Products :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    ProductSchema.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Product :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    var prod = new ProductSchema({
        Name: req.body.Name,
        Status: req.body.Status,
        Price: req.body.Price,
        Brand: req.body.Brand,
        Care: req.body.Care,
        Category: req.body.Category,
        Color: req.body.Color,
        Material: req.body.Material,
        Size: req.body.Size,
        
    });
    prod.save((err, doc) => {
        if (!err) { res.send(doc); 
        console.log("Product Saved in DB")}
        else { console.log('Error in Product Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => {
    console.log("Entering router.put")
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var prod = {
        Name: req.body.Name,
        Status: req.body.Status,
        Price: req.body.Price,
        Brand: req.body.Brand,
        Care: req.body.Care,
        Category: req.body.Category,
        Color: req.body.Color,
        Material: req.body.Material,
        Size: req.body.Size,
        AvailableDate:req.body.AvailableDate
        
        
    };
    ProductSchema.findByIdAndUpdate(req.params.id, { $set: prod }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); 
        console.log("Product Updated")}
        else { console.log('Error in Product Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    ProductSchema.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Employee Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;