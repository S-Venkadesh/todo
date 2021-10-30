import React, { useState, useRef } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";

import "./AddUser.css";


const AddUsers = props => {

    const enteredUsername = useRef();
    const enteredAge = useRef();

    function UserHandler(e){
        e.preventDefault();

        const name = enteredUsername.current.value;
        const newAge = enteredAge.current.value;

        if(name.trim().length === 0 ||newAge.trim().length === 0 ){
            return;
        }
        if(+newAge < 1){
            return ;
        }
        // props.onAddUser(userName,age)
        props.onAddUser(name,newAge)
        console.log("name,age", name, newAge);
    }

    return (
        <Card>
        <form onSubmit={UserHandler}>
            <label htmlFor="UserName">User Name</label>
            <input ref={enteredUsername} id="UserName" type="text" autoComplete="off" />
            <label htmlFor="Age">Age</label>
            <input ref={enteredAge} type="text" id="Age" autoComplete="off" />
            {/* <button type="submit">Submit</button> */}
            <Button>Submit</Button>
        </form>
        </Card>
    )
}

export default AddUsers;