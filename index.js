const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

// Important lines to not get errors
app.set("view engine", "ejs");
app.set("views,", path.join(__dirname, "/views"));

app.listen(port, () => {
  console.log(`app is listening on port ${port} `);
});

// app.get("/ig/:username",(req,res)=>{
//     const followers =["adam", "bob", "aman"]
//     let {username}= req.params;
//     res.render("instagram.ejs" ,{username, followers})
// })

app.get("/ig/:username",(req,res)=>{
    let {username} = req.params;
    const instaData = require("./data.json")
    const data = instaData[username];
    // console.log(instaData)
    // console.log(data);
    if(data){
        res.render("instagram.ejs",{data})
    }
   else{
    res.render("error.ejs")
   }
})

app.get("/rollDice", (req, res) => {
  let diceVal = Math.floor(Math.random() * 6) + 1;
  res.render("rolldice.ejs", {diceVal});
});

app.get("/", (req, res) => {
  res.render("home.ejs");
});
