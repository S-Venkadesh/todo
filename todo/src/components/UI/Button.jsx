import React from "react";
import "./Button.css";

const Button = (props) => {
    const {children, onClick, type, size} = props;
    return (
        <button className="button" type={type} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button;