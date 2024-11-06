const express = require("express")
const format= require('date-format')
const app = express();

const PORT= 4000 || process.env.PORT;

app.get("/",(req,res)=>{
    res.status(200).send("Hello world")
})

app.get("/api/v1/instaSocial",(req,res)=>{
    const instaSocial={
        username: "adarshhembramofficial",
        followers:44,
        follow:43,
        date: format.asString("dd[MM]- hh:mm:ss",new Date()),
    }

    res.status(200).json({instaSocial});
})


app.get("/api/v1/facebook",(req,res)=>{
    const instaSocial={
        username: "adarshhembramo",
        followers:442,
        follow:433,
        date: format.asString("dd[MM]- hh:mm:ss",new Date()),
    }

    res.status(200).json({instaSocial});
})


app.get("/api/v1/instagram",(req,res)=>{
    const instaSocial={
        username: "adarshhal",
        followers:414,
        follow:413,
        date:format.asString("dd[MM]- hh:mm:ss",new Date()),
    }

    res.status(200).json({instaSocial});
})


app.get("/api/v1/linkedin",(req,res)=>{
    const instaSocial={
        username: "adarshhembial",
        followers:4423,
        follow:4343,
        date: format.asString("dd[MM]- hh:mm:ss",new Date()),
    }

    res.status(200).json({instaSocial});
})


app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`);
    
})