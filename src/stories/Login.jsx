
import React from 'react'
// import "./Button.css"
  
function Login(props) {
    const { variant = 'login', children, ...rest} = props
    return (
         <button className={`btn ${variant}`} {...rest}>
         {children}
         </button>
        )

}
export default Login;
