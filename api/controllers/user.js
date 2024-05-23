const Reg = require("../models/reg")
const jwt = require("jsonwebtoken")

exports.homePageController =(req,res)=>{
    res.send("Home Page")
}


exports.regController = async(req,res)=>{
    const {username,pass} =req.body

    const userCheck = await Reg.findOne({userName:username})

    if(userCheck==null){
        const record = await new Reg({
            userName:username,
            password:pass
        })
        await record.save()

        const saved_data = await Reg.findOne({userName:username})

        const token = jwt.sign({userId:saved_data._id},"fguc678",{expiresIn:"3d"})

        res.json({"record":record,"token":token})

    }else{
        res.json({message:"Email id already exist..🙂"})
    }

    



}   

exports.userCheckController = async(req,res)=>{
    const {username,pass} =req.body

    const userCheck = await Reg.findOne({userName:username})

    if(userCheck!==null){
        if(userCheck.password==pass){
            const token = jwt.sign({userId:userCheck._id},"tgg4567",{expiresIn:"3d"})
            res.json({"result":userCheck,"token":token})
        } else{
            res.json({message:"Email & password did not match..🫤"})
        }
        
        
    }else{
        res.json({message:"Email & password did not match..🫤"})
    }

}