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

const SearchProductSchema = new mongoose.Schema(
    {
        id: String,
        name : String,
        price :String,
        image : String,
        describe: [String]
    }, {
    collection: "SearchProduct"
}
)
const SearchProductModel = productDB.model("SearchProduct", SearchProductSchema);
module.exports = SearchProductModel;