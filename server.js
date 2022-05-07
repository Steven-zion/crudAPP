
const express= require('express');
const dotenv= require('dotenv');
const morgan= require('morgan');
const bodyParser= require('body-parser')
const path=require('path');

const app= express();

   //PORT = process.env.PORT
dotenv.config({path:'config.env'});

//log requests
app.use(morgan("tiny"));

//parse request to bodyParser
app.use(bodyParser.urlencoded({extended:true}))

//set view engine
app.set("view engine","ejs")

//load assets
app.use("/css/style.css", express.static(path.resolve(__dirname,"/assets/css")))
app.use("/img", express.static(path.resolve(__dirname, "/assets/img")));
app.use("/js", express.static(path.resolve(__dirname, "/assets/js")));


app.get("/", (req,res)=>{
    res.render("index");
})

app.listen(3000, ()=>{
    console.log('server is running on https://localhost:3000');
});
