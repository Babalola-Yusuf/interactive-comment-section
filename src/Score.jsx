import React from "react";
import jsonData from "./data.json";

function Score({i}){
    let scoreValue = jsonData.comments[i].score;
    

    return(
        <div className="flex flex-col justify-between items-center h-24  bg-Very-light-gray p-3 rounded-xl">
           <button className="text-Light-grayish-blue text-xl"> 
                <img src="images\icon-plus.svg" alt="plus" />
            </button> 
            <div className=" text-Moderate-blue font-bold">
                 {scoreValue}
            </div>
            <button className="text-Light-grayish-blue text-xl ">
                <img src="images\icon-minus.svg" alt="minus" />
            </button>
        </div>
    )
}

export default Score