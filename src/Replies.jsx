import React from "react";
import Score from "./Score";
import Image from "./Image";
import ReplyBtn from "./ReplyBtn";
import jsonData from './data.json';

function Replies({j, i=1}) {
    let username = jsonData.comments[i].replies[j].user.username;
    let createdAt = jsonData.comments[i].replies[j].createdAt;
    let content = jsonData.comments[i].replies[j].content;
    let replyingTo = jsonData.comments[i].replies[j].replyingTo;
    return(
        <div className=" bg-white flex items-start p-6 gap-6 rounded-lg mb-6">
           <Score i={j}></Score> 
           <div className="flex flex-col gap-6">
                <div className="flex justify-between"> 
                    <div className="flex">
                    <div className="flex gap-6">
                        <div className="w-8">
                        <Image></Image>
                        </div>
                    
                        <p className=" font-bold">{username}</p>
                        <p className=" text-Grayish-Blue">{createdAt}</p>
                    </div>
                    </div>
                    
                        <ReplyBtn></ReplyBtn>
                </div>
                <p className=" text-Grayish-Blue"><span className=" text-Moderate-blue font-semibold">@{replyingTo}</span>{content}</p>
           </div>
          
            
        </div>
    )
    }

export default Replies;