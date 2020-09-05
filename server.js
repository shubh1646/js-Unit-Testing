const express = require('express')
console.log("express")


const fareUtils = require('./fareutils')
const app = express();
const path = require('path');

 app.use('/',express.static(path.join(__dirname,'public_static')))
 app.use(express.json())
 app.use(express.urlencoded({extended:true}))

app.get("/ ", (req,res)=>{
    console.log("hello");
   // let mssg = fareUtils.returnHello();
   res.send('<h1 style="color:red;">hello world <h1> ')
})

app.post('/calfare',(req,res)=>{
  
    let km = parseFloat(req.body.km);
    let  min = parseInt(req.body.min);
    let fare  = fareUtils.calFare(km,min);
    res.send({fare:fare})

})
app.get('/rate',(req,res)=>{
    console.log("rate is called")
    res.send(fareUtils.rate);
})

app.listen(2222,()=>{
    console.log("server started at http://localhost:2222");
})