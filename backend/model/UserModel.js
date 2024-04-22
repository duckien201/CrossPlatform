const mongoose = require("mongoose")
const userDb = mongoose.createConnection(
  'mongodb://localhost:27017/App',
  // "mongodb+srv://kien0216766:danentang@cluster0.5fwosaq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  function(err){
    if(err){
      console.error('Fail to connect to App database' + err);

    }else{
      console.error('Successfully connected to App database');
    }
  }
)

const UserSchema = new mongoose.Schema(
  {
        name: String,
        email: { type: String, unique: true },
        password: String,
        phone: String,
      },
      {
        collection: "Users",
      }
)
const UserModel = userDb.model("Users", UserSchema);

module.exports = UserModel;

// mongoose.connect("mongodb+srv://kien0216766:danentang@cluster0.5fwosaq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

// const db = mongoose.connection;

// db.on("error", console.error.bind(console, "MongoDB connection error:"));

// db.once("open", function () {
//   console.log("Connected to MongoDB");
// });

// const UserSchema = new mongoose.Schema(
//   {
//     name: String,
//     email: { type: String, unique: true },
//     password: String,
//     phone: String,
//   },
//   {
//     collection: "Users",
//   }
// );

// const UsersModel = mongoose.model("Users", UserSchema);

// module.exports = UsersModel;