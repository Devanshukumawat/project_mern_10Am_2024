import { Button } from "@mui/material";
import Left from "./Left";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";


function ProductForm() {
    const [Pname,setPname] = useState("")
    const [Pprice,setPprice] = useState("")
    const [Pdesc,setPdesc] = useState("")
    const [message,setMessage] = useState("")
    const navigate = useNavigate()

    function handleForm(e){
        e.preventDefault()
        const formData = {Pname,Pprice,Pdesc}
        fetch("/api/insertProduct",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(formData)
        }).then((res)=>{
            return res.json()
        }).then((data)=>{
            if(data._id){
                navigate("/productadd")
            }else{
                setMessage(data.message)
            }
        })
    }

    return ( 
        <>
            

            <div className="w-4/5 h-screen flex mx-auto flex-col">
            <Left/>

            <div className="w-3/5">
                
            </div>
                    <h1 className="text-2xl text-center text-blue-800">Product Add Here</h1>
                    <p className="text-center text-red-700">{message}</p>
                    <form onSubmit={handleForm}>
                        <label>Product Name</label>
                        <input type="text" className="border-2 form-control "
                            value={Pname}
                            onChange={(e)=>{setPname(e.target.value)}}

                        /> 
                        <label>Product Description</label>
                        <input type="text" className="border-2 form-control "
                            value={Pdesc}
                            onChange={(e)=>{setPdesc(e.target.value)}}
                        />
                        <label>Product Price</label>
                        <input type="text" className="border-2 form-control "
                            value={Pprice}
                            onChange={(e)=>{setPprice(e.target.value)}}
                        />
                        <Button className="border-2 form-control" variant="contained" color="warning" type="submit">Add Product</Button>
                    </form>
                   
            </div>


        </>
     );
}

export default ProductForm;