const express= require("express");
const cors= require("cors");
const { createTodo, updateTodo } = require("./types");
const {todo} =require("./db")
const app=express();

const port=7000;
app.use(express.json());
app.use(cors());

app.post("/todo",async (req,res)=>{
 
    const createPayload=req.body;
    const parsePayload=createTodo.safeParse(createPayload);
    if(!parsePayload.success){
        return res.status(411).json("you send wrong input 123");
    }

    //put it in mongodb
    await todo.create({
         title:createPayload.title,
         description:createPayload.description,
         completed:false
    })
     res.json({
        msg:"todo created"
     })

})

app.get("/todo",async (req,res)=>{
  const todos= await todo.find({});
  res.json({
    todos
  })
})

app.put("/completed",async (req,res)=>{
    const payloadBody=req.body;
    const updatePayload=updateTodo.safeParse(payloadBody);

    if(!updatePayload.success){
        return res.status(411).json("you send wrong input");
    }

    //put it in mongodb

    await todo.updateOne({
           _id:req.body.id
    },{
        completed:true
    })

    res.json({
        msg:"marked as completed"
    })
    


})




app.listen(port,(err)=>{
    if(err){
        console.log(err);
    }
    console.log("server is listening");
    
})