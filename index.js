const express = require("express");
const path = require("path")

const dotenv = require("dotenv");
dotenv.config();

const {connectToMongoDB} = require('./connect')
const cookieParser = require("cookie-parser")
const {restrictToLogedinUserOnly,checkAuth}= require("./middleware/auth")
const URL = require("./models/user")

const app = express();
const PORT =process.env.PORT;

app.set("view engine","ejs");
app.set("views", path.resolve("./views"));

const staticRoute= require("./routes/statics")
const urlRoute = require("./routes/url")
const userRoute= require("./routes/owner")

connectToMongoDB(process.env.DB_CONNECT).then(()=>console.log("mongodb connected"));

app.use(express.json());

app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

app.use("/",checkAuth,staticRoute);
app.use("/user",userRoute);
app.use("/" ,restrictToLogedinUserOnly ,urlRoute);

app.use('/url/:shortId',async(req,res)=>{
const shortId = req.params.shortId;

 const entry = await URL.findOneAndUpdate({
    shortId
  },
  {$push:{
    visitHistory:{
      timestamp:Date.now(),
    },
  },}
)

res.redirect(entry.redirectURL);
})

app.listen(PORT,()=> console.log(
    `server start on http://localhost:${PORT}`
))