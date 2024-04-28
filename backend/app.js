const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const userRoutes = require('./routes/UserRoutes.js')
const productRoutes = require('./routes/ProductRoutes.js')
const cors = require('cors');
const jwt = require('jsonwebtoken');

app.use(bodyParser.urlencoded({ extended: false }));


const JWT_SECRET = "hvdvay6ert72839289()aiyg8t87qt72393293883uhefiuh78ttq3ifi78272jdsds039[]]pou89ywe"
app.use(bodyParser.json());

app.use(cors())
// Lưu thông tin vào DB
// app.post("/register", create);

app.get("/", (req, res, next) => {
  res.json("Home");
});

app.listen(5001, () => {
  console.log("Hello World");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
app.use('/api/users',userRoutes);
app.use('/api/products',productRoutes)
// Check login
// app.post("/login", login);


// Reset password

// app.post("/reset-password", resetPassword);


//user profile
// app.post("/userdata" , async(req,res)=>{
//   const { token } = req.body;
//   try {
//     const user = jwt.verify(token, JWT_SECRET);
//     const useremail = user.email;

//     UserModel.findOne({ email: useremail }).then((data) => {
//       return res.send({ status: "Ok", data: data });
//     });
//   } catch (error) {
//     return res.send({ error: error });
//   }
// })