const mongoose = require("mongoose");

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



const OrderSchema = new mongoose.Schema(
  {
        nameUser: String,
        address :String,
        phone : String,
        nameProduct: String,
        price : String
      },
      {
        collection: "Orders",
      }
)
const OrderModel = userDb.model("Orders", OrderSchema);

module.exports = OrderModel;