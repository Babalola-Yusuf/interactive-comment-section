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
        <div className="bg-white sm:flex items-start p-6 gap-6 rounded-lg mb-6 relative h-56 md:h-44">
           <Score i={j}></Score> 
           
                <div className="flex justify-between absolute md:left-20 "> 
                    <div className="flex">
                    <div className="flex gap-6">
                        <div className="w-8">
                        <Image></Image>
                        </div>
                    
                        <p className=" font-bold">{username}</p>
                        <p className=" text-Grayish-Blue">{createdAt}</p>
                    </div>
                    </div>
                    
                </div>
                <p className=" text-Grayish-Blue absolute md:left-20 top-14 bottom-5"><span className=" text-Moderate-blue font-semibold">@{replyingTo}</span>{content}</p>
          
                <div className="absolute bottom-6 md:top-6 right-6">
                <ReplyBtn></ReplyBtn>
            </div>  
        </div>
    )
    }

export default Replies;