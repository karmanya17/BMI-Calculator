const express=require("express");
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.listen(3000,function(){
  console.log("Server started at port 3000");
});
app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
});
app.post("/",function(req,res){
  var num1=Number(req.body.num1);      // Number() is used to convert text to integer numbers.
  var num2=Number(req.body.num2);     // eq.body.num1 and req.body.num2 is parsed as text.
  var result=num1+num2;
  res.send("Result = "+result);
});

app.get("/bmicalculator",function(req,res){
  res.sendFile(__dirname+"/bmiCalculator.html");
});
app.post("/bmicalculator",function(req,res){
  var height=parseFloat(req.body.height);
  var weight=parseFloat(req.body.weight);
  height=height/100;
  var bmi=weight/(height*height);
  res.send("Your BMI is ="+bmi.toFixed(2));
});
