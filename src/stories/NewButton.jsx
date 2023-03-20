import React from 'react'
import "./NewButton.css"
  
function NewButton(props) {
    const { variant = 'login', children, ...rest} = props
    return (
        <button className={`btn ${variant}`} {...rest}>
        {children}
        </button>
    )
}
export default NewButton;