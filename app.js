const express = require("express");
const app = express();

app.get("/", (req,res)=>{
res.send("<h1>CI/CD pipeline working 🚀</h1>");
});

app.listen(3000, ()=>{
console.log("Server running");
});
