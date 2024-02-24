const mongoose=require("mongoose");


mongoose.connect("mongodb+srv://jadonyash2:Yash%40%4052425242@cluster0.ko4pxkf.mongodb.net/todos")

const todoSchema= mongoose.Schema({
    title:String,
    description:String,
    completed:String
})

const todo=mongoose.model('todos',todoSchema);


module.exports={
    todo:todo
}