const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();

const penRoutes = require("./router/pen");
const userRoutes = require("./router/user")

const app = express();
const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
app.use(morgan("dev"));
app.use(bodyParser.json());

app.use("/api",penRoutes);
app.use("/api",userRoutes);
 
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true
},err =>{
    if (err) {
        console.log(err)
    }else{
        console.log("connected to mongodb online ...")
    }
});


const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server started on port ${port}`));