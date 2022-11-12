const express = require('express')
const router = require('./source/routes/routes')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
app = express()

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json())

// For accessing the variables in .env files..
const dotenv = require('dotenv')
dotenv.config()


// Connection
mongoose.connect(process.env.MONGODB_URL,
    // { useNewUrlParser: true, useUnifiedTopology: true },  //optoinal.
    ()=>{
        console.log("DB connected..")
    }
    )

app.use("/",router)

app.listen(8080,()=>{
    console.log("Server is rocking..")
})

