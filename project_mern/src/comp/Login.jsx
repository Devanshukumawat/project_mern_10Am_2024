import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {

    const [username,setUser] = useState("")
    const [pass,setPass] = useState("")
    const [message,setMessage] = useState("")

    const navigate =  useNavigate()
    

    function handleForm(e){
        e.preventDefault()
        const formData = {username,pass}

        fetch("/api/checkuser",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(formData)
        }).then((res)=>{return res.json()}).then((data)=>{
            console.log(data)
            if(data.result && data.result._id){
                setMessage("")
                if(data.result && data.result.userName==="admin"){
                    navigate("/admin")
                }
                else{
                    navigate("/product")
                }             
            }
            else{
                setMessage(data.message)
            }
        })
    }

    return ( 
        <>
              <div className="w-full h-screen flex justify-center items-center">
                <div className="w-72 h-72">
                <h1 className="text-3xl m-3 text-center font-bold text-red-600">Login</h1>
                <p>{message}</p>
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
                    <button className="btn btn-danger form-control mt-3">Login</button>
                    <p> New User ? <Link to={'/reg'}>Create Account</Link></p> 
                </form>
                </div>
            </div>
        </>
     );
}

export default Login;