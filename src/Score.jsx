import React from "react";
import jsonData from "./data.json";

function Score({i}){
    let scoreValue = jsonData.comments[i].score;
    

    return(
        <div className="flex h-10 w-24 md:flex-col justify-between items-center md:h-24 md:w-10 bg-Very-light-gray p-3 rounded-xl absolute bottom-6 md:top-6 md:left-6">
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