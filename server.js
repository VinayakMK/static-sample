const express = require("express");
const app = express();
const PORT = 4000;
const path= require("path");

//app.use(express.static("public"));
console.log(__dirname + "/public");
app.use("/static",express.static(path.join(__dirname + "/public")));

app.get('/', (req,res)=>{
    res.send("Home")
})


app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
})