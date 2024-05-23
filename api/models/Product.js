const mongoose = require("mongoose")

const {Schema,model} = mongoose


const ProductSchema = new Schema({
    ProductName:String,
    ProductPrice:Number,
    ProductDesc:String,
    status:{type:String,default:"Out-of-stock"}
})

const productsTable =  model("ProductTable",ProductSchema)
module.exports = productsTable
