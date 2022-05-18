const express = require('express');
const app = express();
const hbs = require("hbs");
const mongoose = require("mongoose");
const path = require("path");

app.set("view engine","hbs");

const path_set = path.join(__dirname,'/public');
app.use(express.static(path_set));

app.get("/",(req,res) => {
    res.render("index.hbs");
})

app.get("/news", (req, res)=>{
    res.render("newspage.hbs")
})

app.get("/main", (req, res)=>{
    res.render("main.hbs")
})

app.get("/watch", (req, res)=>{
    res.render("watch.hbs")
})

app.get("/games", (req, res)=>{
    res.render("games.hbs")
})


app.get("/subscribe", (req, res)=>{
    res.render("subscribe.hbs")
})

app.get("/csgo", (req, res)=>{
    res.render("csgo.hbs")
})

app.get("/lol", (req, res)=>{
    res.render("lol.hbs")
})

app.get("/dota", (req, res)=>{
    res.render("dota.hbs")
})

app.get("/valorant", (req, res)=>{
    res.render("valorant.hbs")
})

app.get("/fifa", (req, res)=>{
    res.render("fifa.hbs")
})

app.get("*",(req,res)=>{
    res.render("404.hbs")
})


app.listen("3000",() =>{
    console.log("Listening on port: 3000")
})