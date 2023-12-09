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
        <div className=" bg-white sm:flex items-start p-6 gap-6 rounded-lg mb-6 relative h-56 md:h-44">
           <Score i={i}></Score>
           
                <div className="flex justify-between absolute md:left-20 "> 
                    <div className="flex">
                    <div className="flex gap-6">
                        <div className="h-8 w-8">
                        <Image></Image>
                        </div>                                   

                        <p className=" font-bold">{username}</p>
                        <p className=" text-Grayish-Blue">{createdAt}</p>
                    </div>
               
                    </div>
                 </div> 
           <p className=" text-Grayish-Blue top-14 bottom-6 absolute md:left-20">{content}</p>

            <div className="absolute right-6 bottom-6 md:top-6">
                <ReplyBtn></ReplyBtn>
            </div>
            
           
        </div>
    )
    }

export default Comment;