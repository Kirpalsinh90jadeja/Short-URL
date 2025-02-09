const { getUser } = require("../service/auth");

async function restrictToLogedinUserOnly(req, res, next) {
  const userUid = req.cookies?.uid; //.uid is cookies name

  if (!userUid) return res.redirect("/"); //check user has UId if not redirect to login page

  // now if user is not available and come with uuid
  const user = getUser(userUid); //
  if (!user) return res.redirect("/");

  req.user = user;
  next();
}

async function checkAuth(req,res,next) {
    const userUid = req.cookies?.uid; //.uid is cookies name

    
  
    // now if user is not available and come with uuid
    const user = getUser(userUid); //
    
  
    req.user = user;
    next();
}

module.exports = {
  restrictToLogedinUserOnly,
  checkAuth,
};
