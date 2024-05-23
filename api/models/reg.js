const mongoose = require("mongoose")

const {Schema,model} = mongoose

const regSchema = Schema({
    userName:String,
    password:Number
})

const regTable = model("reg",regSchema)

module.exports = regTable