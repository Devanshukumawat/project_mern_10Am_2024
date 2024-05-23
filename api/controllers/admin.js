const ProductCollection = require("../models/Product")

exports.productinsertController = async(req,res)=>{
    const{Pname,Pprice,Pdesc} = req.body


    const record = await new ProductCollection({
        ProductName:Pname,
    ProductPrice:Pprice,
    ProductDesc:Pdesc,
    })

    await record.save()
    res.json(record)

    // if(record===null){
    //     await record.save()
    // res.json(record)
    // }else{
    //     res.json({message:"Please Enter Product Details..😕"})
    // }

    

}

exports.productDataController = async(req,res)=>{
    const record = await ProductCollection.find()
    res.json(record)
}


exports.updateFormController = async(req,res)=>{
    const ProductId = req.params.productid

    const record = await ProductCollection.findById(ProductId)
    res.json(record)

}


exports.updateProductController = async(req,res)=>{
    const id = req.params.id
    console.log(req.body)
     const {Pname,Pdesc,Pprice,Pstatus} = req.body
     const record =  await ProductCollection.findByIdAndUpdate(id,{
        ProductName:Pname,
    ProductPrice:Pprice,
    ProductDesc:Pdesc,
    status:Pstatus
     })
     res.json(record)
}


exports.deleteProductController = async(req,res)=>{
    const id = req.params.id
    const record = await ProductCollection.findByIdAndDelete(id)
    res.json({message:"Successfully delete"})
}


exports.allProductsController = async(req,res)=>{
    const record = await ProductCollection.find({status:"In-stock"})
    res.json(record)
}