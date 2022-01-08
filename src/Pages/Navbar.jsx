import { Link } from "react-router-dom"



export const Navbar =()=>{
    return (
        <div style={{
            border :"1px solid black",
            height : "60px",
            textAlign:"center"
            
        }}>

         <Link to="/"> Home </Link>
         <Link to="/Dashboard"> Dashboard </Link>
         <Link to="/Login"> Login  </Link>
        
        </div>
    )
}