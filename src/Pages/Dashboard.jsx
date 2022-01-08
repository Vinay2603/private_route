import { Link } from "react-router-dom"


export const Dashboard =()=>{

 
    return  (
        <>
        <div style={{
            textAlign :"center",
            fontSize:"40px"
        }}>DASHBOARD </div>
        <div style={{
            textAlign :"center",
            fontSize:"40px"
        }}>  <Link  to="/Dashboard/Setting">SEtting</Link>  </div>
        </>
    )
} 