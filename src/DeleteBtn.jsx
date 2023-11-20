import React from "react";

/* import replyIcon from 'images\icon-reply.svg'; */

function DeleteBtn() {
   
    return(
      <button>
        <div className="flex gap-2 items-center"> 
          <img src="images\icon-delete.svg" alt="replyicon " className=" h-3"/>  
          <p className=" font-bold text-Soft-Red">Delete</p>
        </div>
      </button>
        
    )
    }

export default DeleteBtn;