const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = 3000;

app.use(bodyParser.urlencoded({extended : true}));
app.get("/", (req,res,next)=>{
    //Questo si usa per collegare un file html
    res.sendFile(__dirname + "/index.html");

});

app.get("/bmicalculator", (req,res,next)=>{
    res.sendFile(__dirname + "/bmiCalculator.html")
});

app.post("/bmicalculator", (req,res,next)=>{
    //ParseFloat function parses a str argument and returns a floating point numb.
    let weight = parseFloat(req.body.weight);
    let height = parseFloat(req.body.height);
   
    let result = weight / ( height * height);
    res.send("Your BMI is " + result);
})

app.post("/",(req,res,next)=>{
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);

    let result = num1 + num2; 

    res.send("The result of the calculation is " + result);
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})