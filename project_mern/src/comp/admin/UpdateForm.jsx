import { Button } from "@mui/material";
import Left from "./Left";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";


function UpdateForm() {
    const {id} = useParams()
    const navigate = useNavigate()
    const [Pname,setPname] = useState("")
    const [Pdesc,setPdesc] = useState("")
    const [Pprice,setPprice] = useState("")
    const [Pstatus,setPstatus] = useState("")

   

    useEffect(()=>{
        fetch(`/api/updateformdata/${id}`).then((res)=>{
            return res.json()
        }).then((data)=>{
            console.log(data)
            setPname(data.ProductName)
            setPdesc(data.ProductDesc)
            setPprice(data.ProductPrice)
        })
    },[])
        

    

    function handleForm(e){
        e.preventDefault()
        console.log(Pstatus)
        const formData ={Pname,Pdesc,Pprice,Pstatus}
        fetch(`/api/updateproductdata/${id}`,{
            method:"PUT",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(formData)
        }).then((res)=>{
            return res.json()
        }).then((data)=>{
            if(data._id){
                navigate("/productadd")
            }
        })
        
    }

    return ( 
        <>
       
             <div className="w-4/5 h-screen flex mx-auto flex-col">
            <Left/>

            <div className="w-3/5">
                
            </div>
                    <h1 className="text-2xl text-center text-blue-800">Product Update</h1>
                    <p className="text-center text-red-700"></p>
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
                        <input type="text" className="border-2 form-control mb-8 "
                           value={Pprice}
                           onChange={(e)=>{setPprice(e.target.value)}}
                        />

                        <select
                        value={Pstatus}
                        onChange={(e)=>{setPstatus(e.target.value)}}
                        >
                            <option>---Select---</option>
                            <option value="Out-of-stock">Out-of-stock</option>
                            <option value="In-stock">In-stock</option>
                        </select>

                        <Button className="border-2 form-control" variant="contained" color="success" type="submit">Update Product</Button>
                    </form>
                   
            </div>
        </>
     );
}

export default UpdateForm;