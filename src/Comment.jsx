import React from "react";
import Score from "./Score";
import Image from "./Image";
import ReplyBtn from "./ReplyBtn";
import jsonData from './data.json';

function Comment({i}) {
    let username = jsonData.comments[i].user.username;
    let createdAt = jsonData.comments[i].createdAt;
    let content = jsonData.comments[i].content;
    return(
        <div className=" bg-white flex items-start p-6 gap-6 rounded-lg mb-6">
           <Score i={i}></Score> 
           <div className="flex flex-col gap-6">
                <div className="flex justify-between"> 
                    <div className="flex">
                    <div className="flex gap-6">
                        <div className="h-8 w-8">
                        <Image></Image>
                        </div>
                    
                        <p className=" font-bold">{username}</p>
                        <p className=" text-Grayish-Blue">{createdAt}</p>
                    </div>
                    </div>
                    
                        <ReplyBtn></ReplyBtn>
                </div>
                <p className=" text-Grayish-Blue">{content}</p>
           </div>
          
            
        </div>
    )
    }

export default Comment;