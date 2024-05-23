import { useEffect, useState } from "react";
import Cards from "./product/Cards";

function Product() {

    const [allProduct,setAllproducts] = useState([])

    useEffect(()=>{
        fetch("/api/allProducts").then((res)=>{
            return res.json()
        }).then((data)=>{
            setAllproducts(data)
        })
    },[])
    
    return ( 
        <>
            <h1>Product</h1>
            {
                allProduct.map((value)=>(
                    <Cards productData= {value}/>
                ))
            }
           
        </>
     );
}

export default Product;