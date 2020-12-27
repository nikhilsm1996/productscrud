const express = require('express')
const bodyParser = require('body-parser')
const cors =require('cors')
var productController = require('./controllers/product.controller');
const app = express()
const { mongoose } = require('./config/db.js');


app.get('/',(req,res)=>{
    res.send("Server Works")
})

const port = 3000

app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200' }));

app.use('/products', productController);


app.listen(`${port}`, () => console.log('Server started at port',`${port}`));
