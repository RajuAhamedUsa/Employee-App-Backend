const mysqlConnection = require("./dbconfig/db");
const Emp = require("./routes/users");
const express = require("express");
const bodyparser= require("body-parser");
const app =express();

const cors = require("cors");

app.use(cors());
app.use(bodyparser.json());
// to support URL-encoded bodies
app.use(bodyparser.urlencoded({
    extended: true
}));

mysqlConnection.connect((err)=>{
    if(!err)
    {
        console.log('Connection Success')
    }
    else{
        console.log('Fail Connection')
    }

});

app.use("/emp",Emp);



app.listen(5000,()=>{
    console.log("Running server on port 5000")
})
