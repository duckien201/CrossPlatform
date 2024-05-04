const UsersModel =require( "../model/UserModel.js");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const SECRET_KEY = "hvdvay6ert72839289()aiyg8t87qt72393293883uhefiuh78ttq3ifi78272jdsds039[]]pou89ywe"
const REFRESH_SECRET_KEY = "hvdvay6ert72839289()aiyg8t87qt72393293883uhefiuh78ttq3ifi78272jdsds039[]]pou89ywe"
const saltRounds = 10
const EXPIRES_IN = "4d"
const REFRESH_EXPIRES_IN = '7d'
exports.register = async (req, res, next) => {
    try {
      if (
        !req.body.name ||
        !req.body.email ||
        !req.body.password ||
        !req.body.phone
      ) {
        return res
          .status(400)
          .json({ message: "Vui lòng điền đầy đủ thông tin !" });
      }
  
      const existingUser = await UsersModel.findOne({ email: req.body.email });
  
      if (existingUser) {
        return res
          .status(400)
          .json({ message: "Email đã tồn tại , vui lòng đăng nhập !" });
      }
      const hashedPassword = await bcrypt.hash(req.body.password , saltRounds)
  
      const user = new UsersModel({...req.body , password : hashedPassword});
      const result = await user.save();
  
      res.json({ message: "Đăng ký thành công!", user: result });
    } catch (error) {
      next(error);
    }
  }


exports.login = async (req, res, next) => {
    try {
      if (!req.body.email || !req.body.password) {
        return res
          .status(400)
          .json({ message: "Vui lòng điền đầy đủ thông tin !" });
      }
  
      const user = await UsersModel.findOne({ email: req.body.email });
  
      if (!user) {
        return res.status(400).json({ message: "Không tồn tại email" });
      }
  
      const validPassword = await bcrypt.compare(
        req.body.password,
        user.password
      )
      if (!validPassword) {
        return res.status(400).json({ message: "Sai mật khẩu vui lòng nhập lại" });
      }
      if(validPassword){
        const token = jwt.sign({_id :user._id} , SECRET_KEY ,{
          expiresIn : EXPIRES_IN,
        })
        const refreshToken = jwt.sign({_id :user._id} , REFRESH_SECRET_KEY ,{
          expiresIn : REFRESH_EXPIRES_IN,
        })
        res.json({ message: "Đăng nhập thành công!", 
          user: user,
          token : token,
          refreshToken : refreshToken });
      }
      
    } catch (error) {
      next(error);
    }
  }

exports.resetPassword = async (req, res, next) => {
    try {
      if (!req.body.email || !req.body.newpassword || !req.body.confirmpassword) {
        return res
          .status(400)
          .json({ message: "Please enter all required fields." });
      }
  
      if (req.body.newpassword !== req.body.confirmpassword) {
        return res.status(400).json({
          message: "The new password and confirm password do not match.",
        });
      }
  
      const user = await UsersModel.findOne({ email: req.body.email  });
  
      if (!user) {
        return res.status(400).json({ message: "The email does not exist." });
      }
  

      const hashedPassword = await bcrypt.hash(req.body.newpassword , saltRounds)

      user.password = hashedPassword;
      await user.save();
  
      res.json({ message: "Password reset successfully" });
    } catch (error) {
      next(error);
    }
  } 

  exports.changePassword = async (req, res, next) => {
    try {
      if (!req.body.email || !req.body.currentPassword || !req.body.newPassword) {
        return res
          .status(400)
          .json({ message: "Please enter all required fields." });
      }
  
      const user = await UsersModel.findOne({ email: req.body.email  });
  
      if (!user) {
        return res.status(400).json({ message: "The email does not exist." });
      }
  
      const validPassword = await bcrypt.compare(
        req.body.currentPassword,
        user.password
      )

      if(!validPassword){
        return res
        .status(400)
        .json({message :"The current password is incorrect"})
      }

      const hashedPassword = await bcrypt.hash(req.body.newPassword,saltRounds)

      user.password = hashedPassword;
      await user.save();
  
      res.json({ message: "Password change successfully" ,
      password :user.password
    });
  } catch (error) {
      next(error);
    }
  }

