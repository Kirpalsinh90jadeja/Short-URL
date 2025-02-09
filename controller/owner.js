const { v4: uuidv4 } = require("uuid");
const User = require("../models/owner");
const { setUser } = require("../service/auth");

async function handelUserSignup(req, res) {
  const { name, email, password } = req.body;

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    console.log(existingUser);
    let error = "Email already exist";
    return res.render('signup',{error:error})
  }
  const user= await User.create({
    name,
    email,
    password,
  });
   
  const token = user.generateAuthToken();
  res.cookie("uid", token); 
  return res.render("home");
}

async function handelUserLogin(req, res) {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email, password});

    if (!user){
       return res.render("login", { error:  "Invalid Username or Password" })
      }
    
    
    const token = user.generateAuthToken();
    // const token = setUser( user); //call setUser function and pass key as sessionId and pass value as user
    res.cookie("uid", token); // name of cookie is a uid and pass sessinId to cookie
    return res.render("home");
  } catch (err) {
    console.error("Login Error:", err);
    
    return res.render("login", {
      error: "Something went wrong. Please try again",
    });
  }
}

module.exports = {
  handelUserSignup,
  handelUserLogin,
};
