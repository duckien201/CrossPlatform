const UsersModel =require( "../model/UserModel.js");
const bcrypt = require('bcrypt')
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
  
      const user = new UsersModel(req.body);
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
  
      if (user.password !== req.body.password) {
        return res.status(400).json({ message: "Sai mật khẩu vui lòng nhập lại" });
      }
      res.json({ message: "Đăng nhập thành công!", user: user });
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
  
      user.password = req.body.newpassword;
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

