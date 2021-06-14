const express=require('express');
const ejsMate = require('ejs-mate');
const path=require('path');



//START APP
const app=express();

//SET TEMPLATE ENGINE
app.engine('ejs', ejsMate)
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')))

app.get('/',(req,res)=>{
    res.render('home');
})
app.get('/headings',(req,res)=>{
    res.render('headings');
})
app.get('/images',(req,res)=>{
    res.render('image');
})


app.listen(3001,()=>{
    console.log("listeing at 3001");
})