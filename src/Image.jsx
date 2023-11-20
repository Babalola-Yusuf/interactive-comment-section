import React from "react";
import jsonData from "./data.json";

function Image(){
    let imageValue = jsonData.comments[0].user.image.png;    
    return(
        <div className="flex h-full w-full">
           <img src={imageValue} alt="img"/>
        </div>
    )
}

export default Image