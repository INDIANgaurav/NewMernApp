// // const User = require("../model/user-model");
// // const bcrypt = require("bcrypt");
// // const jwt = require("jsonwebtoken");
// // require("dotenv").config();




// // const home = async (req, res) => {
// //   try {
// //     res.status(200).send("welcome Gaurav ");
// //   } catch (error) {
// //     console.log(error.message);
// //   }
// // };

// // const register = async (req, res) => {
// //   try {
// //       const { username, email, phone, password } = req.body;
// //     //   console.log( "data about req body ->>" ,req.body);
      
// //     const userExist = await User.findOne({ email });

// //     console.log("user exist is " + userExist ) ;

    
// //     if (userExist) {
// //       return res.status(400).json({
// //         success: false ,
// //         msg: "user already exists",
// //       });
// //     } 
// //     const hashedPassword = await bcrypt.hash(password , 10 )
// //     // const payload = {
// //     //     email:userExist.email,
// //     //     id : userExist._id ,
// //     //     isAdmin : userExist.isAdmin
    
// //     // }
  
// //     console.log("i am here 😀😀" ) ;



// //     console.log("your payload data is " ) ;

  

// //     const userCreated = await User.create({
// //       username,
// //       email,
// //       phone,
// //       password : hashedPassword,
// //     });

// //     res.status(200).json({
// //       msg: userCreated, 
   
      
// //     });
// //   } catch (error) {
// //     res.status(500).json({
// //       success: false,
// //       message: "internal server error",
// //     });
// //   }
// // };
// // module.exports = { home, register };


// const User = require("../model/user-model");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
 
// require("dotenv").config();
// // *-------------------
// // Home Logic
// // *-------------------
// const home = async (req, res) => {
//   try {
//     res.status(200).json({ msg: "Welcome to our home page" });
//   } catch (error) {
//     console.log(error);
//   }
// };

// // *-------------------------------
// //* User Registration Logic 📝
// // *-------------------------------
// // 1. Get Registration Data: 📤 Retrieve user data (username, email, password).
// // 2. Check Email Existence: 📋 Check if the email is already registered.
// // 3. Hash Password: 🔒 Securely hash the password.
// // 4. Create User: 📝 Create a new user with hashed password.
// // 5. Save to DB: 💾 Save user data to the database.
// // 6. Respond: ✅ Respond with "Registration Successful" or handle errors.

// const register = async (req, res) => {
//   try {
//     // const data = req.body;
//     console.log(req.body);
//     const { username, email, phone, password } = req.body;

//     const userExist = await User.findOne({ email : email });
//     // console.log("userExist:- " + userExist) ;
//     if (userExist) {
//       return res.status(400).json({ msg: "email already exists" });
//     }
//     // save user in the DB 
//   const userCreated = await User.create({ username, email, phone, password });

//     // res.status(201).json({ message: "User registered successfully" });
//     res.status(201).json({
//         msg: "Registration Successful",
       
//         userId: userCreated._id ,
//     });
//   } catch (error) {
//     res.status(500).json({ message: "Internal server error" });
//   }
// };







// // user login logic 

// // const login = async (req, res) => {

// // try {
// // const { email ,password } = req.body;
// // console.log("email :- " + email + " password :- " + password ) ;
// // const userExist = await User.findOne({ email });
// // // console.log("userExist:-", userExist) ;

// // if( !userExist ) { 
// //   return res.status(400).json({
// //     success : false ,
// //     msg : "invalid credentials , please try to login "
// //   })
// // }

// // const comparedPassword = await bcrypt.compare( password , userExist.password ) ;


// // if(comparedPassword) {
  
// //   const payload = {
// //     email : userExist.email ,
// //     id : userExist._id ,
// //   }
// //   console.log("i am here 😀😀")
// //   const token = jwt.sign( payload , process.env.JWT_SECRET , {
// //     expiresIn : "24h"
// //   } 
// //   )
// //   console.log("token : " , token) ;
// //     res.status(200).json({
// //         msg: "login Successful",
// //         token: token,
// //         userId: userExist._id.toString(),
// //       });
// // }else {
// //     res.status(401).json({
// //         msg:"invalid email or passowrd "
// //     })
// // }




    
// // } catch (error) {
// //     res.status(500).json({ message: "Internal server error" });
// // }


// //  }

// const login = async (req,res) => {
//   try {

//       //data fetch
//       const {email, password} = req.body;
//       //validation on email and password
//       if(!email || !password) {
//           return res.status(400).json({
//               success:false,
//               message:'PLease fill all the details carefully',
//           });
//       }

//       //check for registered user
//       let user = await User.findOne({email});
//       //if not a registered user
//       if(!user) {
//           return res.status(401).json({
//               success:false,
//               message:'User is not registered',
//           });
//       }

//       const payload = {
//           email:user.email,
//           id:user._id,
//           role:user.isAdmin,
//       };
//       //verify password & generate a JWT token
//       if(await bcrypt.compare(password,user.password) ) {
//           //password match
//           let token =  jwt.sign(payload, 
//                               process.env.JWT_SECRET,
//                               {
//                                   expiresIn:"2h",
//                               });

                              

//           user = user.toObject();
//           user.token = token;
//           user.password = undefined;

//           const options = {
//               expires: new Date( Date.now() + 3 * 24 * 60 * 60 * 1000),
//               httpOnly:true,
//           }

//           res.cookie("babbarCookie", token, options).status(200).json({
//               success:true,
//               token,
//               user,
//               message:'User Logged in successfully',
//           });
//       }
//       else {
//           //passwsord do not match
//           return res.status(403).json({
//               success:false,
//               message:"Password Incorrect",
//           });
//       }

//   }
//   catch(error) {
//       console.log(error);
//       return res.status(500).json({
//           success:false,
//           message:'Login Failure',
//       });

//   }
// }

// module.exports = { home, register , login};






const bcrypt = require("bcrypt");
const User = require("../model/user-model");
const jwt = require("jsonwebtoken");
// const { options } = require("../routes/user");
require("dotenv").config();


const home = async (req, res) => {
  try {
    res.status(200).json({ msg: "Welcome to our home page" });
  } catch (error) {
    console.log(error);
  }
};



const register = async (req,res) => {
  try{
      //get data
      const {username, email, password, phone} = req.body;
      //check if user already exist
      const existingUser = await User.findOne({email});

      if(existingUser){
          return res.status(400).json({
              success:false,
              message:'User already Exists',
          });
      }

      //secure password
      let hashedPassword;
      try{
          hashedPassword = await bcrypt.hash(password, 10);
      }
      catch(err) {
          return res.status(500).json({
              success:false,
              message:'Error inn hashing Password',
          });
      }

      //create entry for User
      const user = await User.create({
          username,email,password:hashedPassword,phone
      })

      return res.status(200).json({
          success:true,
          message:'User Created Successfully',
          user
      });

  }
  catch(error) {
      console.error(error);
      return res.status(500).json({
          success:false,
          message:'User cannot be registered, please try again later',
      });
  }
}


//login
const login = async (req,res) => {
  try {

      //data fetch
      const {email, password} = req.body;
      //validation on email and password
      if(!email || !password) {
          return res.status(400).json({
              success:false,
              message:'PLease fill all the details carefully',
          });
      }

      //check for registered user
      let user = await User.findOne({email});
      //if not a registered user
      if(!user) {
          return res.status(401).json({
              success:false,
              message:'User is not registered',
          });
      }

      const payload = {
          email:user.email,
          id:user._id,
          role:user.isAdmin,
      };
      //verify password & generate a JWT token
      if(await bcrypt.compare(password,user.password) ) {
          //password match
          let token =  jwt.sign(payload, 
                              process.env.JWT_SECRET,
                              {
                                  expiresIn:"2h",
                              });

                              

          user = user.toObject();
          user.token = token;
          user.password = undefined;

          const options = {
              expires: new Date( Date.now() + 3 * 24 * 60 * 60 * 1000),
              httpOnly:true,
          }

          res.cookie("gauravCookie", token, options).status(200).json({
              success:true,
              token,
              user,
              message:'User Logged in successfully',
          });
      }
      else {
          //passwsord do not match
          return res.status(403).json({
              success:false,
              message:"Password Incorrect",
          });
      }

  }
  catch(error) {
      console.log(error);
      return res.status(500).json({
          success:false,
          message:'Login Failure',
      });

  }
}


// *----------------------
// to send user data -user logic 
// *----------------------



const user =async (req , res ) => {
try {
    const userData = req.user;
    console.log(userData);
    return res.status(200).json({
        success:true,
        user:userData
    })
} catch (error) {
    console.log("error from the user route " + error)
    
}
}


module.exports = { home , register , login ,user} 