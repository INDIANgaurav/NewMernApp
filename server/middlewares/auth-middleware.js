const jwt = require('jsonwebtoken');
const User = require('../model/user-model');
require('dotenv').config()


const authMiddleware = async(req, res , next) => {
    const token  = req.header('Authorization') ;
    if(!token)
{
    return res.status(401).json({
        success:false,
        message:'token not provided'
    })
}
 

// console.log("here is token : " , token)
const jwtToken = token.replace("Bearer","").trim() ;
console.log("here is authtoken   : " , jwtToken)

try {
    const isVerify = jwt.verify(jwtToken , process.env.JWT_SECRET);

    
    const userData =  await User.findOne({email:isVerify.email}).select({
        password:0
    })
    console.log(userData) ;
    req.user = userData ;
    req.token = token ;
    req.userId =userData._id
    next();
} catch (error) {
    return res.status(401).json({
        message: "unAuthorized invalid token "
    })
}


}

module.exports = authMiddleware ;