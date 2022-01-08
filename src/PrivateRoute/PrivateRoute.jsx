import { useContext } from "react"
import { AuthContext } from "../context/LoginContext"
import { Navigate } from "react-router-dom"


const PrivateRoute =({children})=>{

   const {token} = useContext(AuthContext)

 
    console.log(token) 
    if(token ===""){
       
        return <Navigate to ={"/login"}/>
    }

    return  children
}

export {PrivateRoute}