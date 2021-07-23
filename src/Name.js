import React from "react";

function Name(props){
    return(
    <div>
<h3>My name is {props.name}
<br/>
My father name is {props.F_name}
My age is {props.age}</h3>


    </div>
    )

}
export default Name;