import React from "react";
import Card from "../UI/Card";

const UserList = props => {
    return (
        <Card>
            <ul style={{color:"white"}}>
            {props.user.map((data)=>{
                return (
                    <li key={data.name} style={{border:"solid 1px",padding:"10px"}}>{data.name} ({data.age} years old)</li>
                )
            })}
            </ul>
        </Card>
    )
}

export default UserList;