import { useState } from "react";
import { Link } from "react-router-dom";

function Reg() {
    const [username,setUser] = useState("")
    const [pass,setPass] = useState("")
    const [message,setMessage] = useState("")

    function handleForm(e){
        e.preventDefault()
        const formData  = {username,pass}
        fetch("/api/reginsert",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(formData)
        }).then((res)=>{
            return res.json()
        }).then((data)=>{
            console.log(data)
            if(data.record && data.record._id){
                setMessage("")
            }else{
                setMessage(data.message)
            }
        })
    }

    return ( 
        <>
            <div className="w-full h-screen flex justify-center items-center">
                <div className="w-72 h-72">
                <h1 className="text-3xl m-3 text-center font-bold text-green-900">Registration</h1>
                <p className="text-red-800">{message}</p>
                <form onSubmit={handleForm}>
                    <label>UserName</label>
                    <input type="text" className="border-2 form-control "
                        value={username}
                        onChange={(e)=>{setUser(e.target.value)}}
                    />
                    <label>Password</label>
                    <input type="text" className="border-2 form-control "
                        value={pass}
                        onChange={(e)=>{setPass(e.target.value)}}
                    />
                    <button className="btn btn-success form-control mt-3">Registration</button>
                    <p>Already a Customer? <Link to={"/login"}>Login</Link></p>
                </form>
                </div>
            </div>
        </>
     );
}

export default Reg;