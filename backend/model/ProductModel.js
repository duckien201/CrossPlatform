const mongoose = require("mongoose")

const productDB = mongoose.createConnection(
    'mongodb://localhost:27017/mydb',
    function (err) {
        if (err) {
            console.error("failed to connect database" + err)
        } else {
            console.log("successfully connected")
        }
    }
)

const ProductSchema = new mongoose.Schema(
    {
        id: String,
        category: String,
        products: [
            {
                productID: String,
                name: String,
                image: String,
                price: String,
                describe: [String]
            }
        ]
    }, {
    collection: "Products"
}
)

const ProductModel = productDB.model("Products", ProductSchema);
module.exports = ProductModel;