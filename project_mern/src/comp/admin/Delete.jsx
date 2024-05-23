import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Delete() {
    const {id} = useParams()

    const navigate = useNavigate()

    useEffect(()=>{
        fetch(`/api/adminproductdelete/${id}`,{
            method:"DELETE"
        }).then((res)=>{
            return res.json()
        }).then((data)=>{
            if(data.message){
                navigate("/productadd")
            }
        })
    },[])

    

    return ( 
        <>
          
            <h1>Loading....</h1>
        </>
     );
}

export default Delete;