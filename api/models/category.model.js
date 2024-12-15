const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true,
        maxLength: 50
    },
    parentCategory:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"categories"
    },
    level:{
        type:Number,
        required:true 
    }
})

const category = mongoose.model("categories", categorySchema);
module.exports = category;