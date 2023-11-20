import React from "react";

/* import replyIcon from 'images\icon-reply.svg'; */

function EditBtn() {
   
    return(
      <button>
        <div className="flex gap-2 items-center"> 
          <img src="images\icon-edit.svg" alt="replyicon " className=" h-3"/>  
          <p className=" font-bold text-Moderate-blue">Edit</p>
        </div>
      </button>
        
    )
    }

export default EditBtn;