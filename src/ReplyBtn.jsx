import React from "react";

/* import replyIcon from 'images\icon-reply.svg'; */

function ReplyBtn() {
   

  
    return(
      <button>
        <div className="flex gap-2 items-center"> 
          <img src="images\icon-reply.svg" alt="replyicon " className=" h-3"/>  
          <p className=" font-bold text-Moderate-blue">Reply</p>
        </div>
      </button>
        
    )
    }

export default ReplyBtn;