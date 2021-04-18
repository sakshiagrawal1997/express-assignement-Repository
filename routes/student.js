const express = require("express");
const fs = require('fs');
const router = express.Router();


const folderPath =  `${__dirname}/data`;

router.get("/", function(req, res, next) {
    res.send("success");
  });

  router.get("/getDetails", function(req, res){
      fs.readFile(`${folderPath}/student.json`, function(err, data){
          if(err) {
              console.log(err);
          }else {
              const dataFromFile = JSON.parse(data);
              console.log("data read from file", dataFromFile);
              res.send({results: dataFromFile});
          }
      })
  });

  router.post("/add", function(req, res){
      console.log("Data from client side", req.body);
      const studentData = req.body;
      fs.writeFile(`${folderPath}/student.json`, JSON.stringify(studentData),function(err){
          if(err){
              console.log("Error in writing file", err);
          }else{
              console.log("File written successfully");
              res.send({"result": "Success"});
          }
      });
  });

  router.get("/studentList", function(req, res){
          res.send({
              "result": [
                  "Rajesh",
                  "Ramesh",
                  "Sayali",
                  "Sanjana"
            ]
          });
});

  module.exports = router;