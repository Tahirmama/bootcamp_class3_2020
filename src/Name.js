import React from "react";

function Name(props){
    return(
    <div>
<h3>My name is : {props.name}
<br/>
My father name is : {props.F_name}
<br/>
My age is : {props.age}
<br/>
My hobby is to play : {props.sports}
<br/>
My future goal is to become a {props.F_plan}

</h3>


    </div>
    )

}
export default Name;