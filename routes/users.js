var express = require('express');
var router = express.Router();

const mysqlConnection = require("../dbconfig/db");


router.delete("/deleteById/:id",(req,res)=>{

  console.log(req.params.id);
  mysqlConnection.query("delete from employee_info where Id = ?",[req.params.id],(err)=>{
    if(err){
      console.log(err)
    }
    else {
      console.log("Employee deleted ")
    }
  })

});

router.put("/editEmp",(req,res)=>{

  mysqlConnection.query("Update employee_info set Name=?,Location=?,PhoneNumber=? where Id = ? ",
      [req.body.Name,req.body.Location,req.body.PhoneNumber,req.body.Id],(err)=>{
        if(err){
          console.log(err)
        }
        else {
          console.log("Update success")
        }
      })
})


router.post("/add",(req,res)=>{


  mysqlConnection.query("insert into employee_info (Name,Date_Of_Birth,Location,Salary,DepartmentId,PhoneNumber) values( ?, ?, ?, ?, ?,?)"
      ,[req.body.Name,req.body.Date_Of_Birth,req.body.Location,req.body.Salary,req.body.DepartmentId,
        req.body.PhoneNumber],(err)=>{
        if(err){
          console.log(err)
        }
        else {
          console.log("Employee Added ")
        }
      })

})

router.get('/employee',(req,res)=>{
  mysqlConnection.query("Select * from employee_info",(err,rows,field)=>{
    if(err)
    {
      console.log(err);
    }
    else
    {
      res.send(rows);
    }
  })
  console.log();
});

router.get("/getByDeptId/:id",(req,res)=>{
  mysqlConnection.query("select * from employee_info where DepartmentId = ?",[req.params.id],(err,rows,fields)=>{

    if(!err){
      res.send(rows)
      console.log("Success dept id ")
    }
    else {
      console.log('Fail get dept id')
    }
  })
});




module.exports = router;
