const path =require('path')
const express = require("express");
const mongoose = require("mongoose");
const cors=require('cors');
const StudentRouter = require("./Router/StudentRouter");
const app = express();

app.use(cors());
app.use(express.json())
app.use(express.static(path.join(__dirname,'/frontend/dist')));

app.get('*',(req,res)=>{
res.sendFile(path.join(__dirname,'frontend' ,'dist','index.html'))

})
app.use("/student",StudentRouter)
mongoose.connect(
    "mongodb://0.0.0.0:27017/",
    {
        dbName:"Profile-Details"
    }

)
    .then(
        () => {
        app.listen(5005, () => {
            console.log("server is start");
        });
    })
    .catch(
        (error) => {
            console.log(error)
        console.log("server not creted");
    });
