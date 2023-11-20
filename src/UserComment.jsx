import React from "react";
import Score from "./Score";
import Image from "./Image";
import ReplyBtn from "./ReplyBtn";
import jsonData from './data.json';
import EditBtn from "./EditBtn";
import DeleteBtn from "./DeleteBtn";

function UserComment({i=1, j}) {
    
    let username = jsonData.comments[i].replies[j].user.username;
    let createdAt = jsonData.comments[i].replies[j].createdAt;
    let content = jsonData.comments[i].replies[j].content;
    let replyingTo = jsonData.comments[i].replies[j].replyingTo;
    return(
        <div className=" bg-white flex p-6 gap-6 rounded-lg mb-6">
           <Score i={j}></Score> 
           <div className="flex flex-col gap-6">
                <div className="flex justify-between">
                    <div className="flex">
                    <div className="flex gap-6 items-center">
                        <div className=" w-8">
                        <Image></Image>
                        </div>
                    
                        <div className=" flex h-3 gap-6 items-center ">
                            <p className=" font-bold">{username}</p>
                            <div className=" bg-Moderate-blue p-1 h-4 flex items-center"> 
                             <p className=" text-white text-xs font-medium ">you</p>
                            </div>
                           
                            <p className=" text-Grayish-Blue">{createdAt}</p>
                        </div>
                       
                    </div>
                    </div>
                    <DeleteBtn></DeleteBtn>
                    <EditBtn></EditBtn>
                </div>
                <p className=" text-Grayish-Blue"><span className=" text-Moderate-blue font-semibold">@{replyingTo}</span> {content}</p>
           </div>
          
            
        </div>
    )
    }

export default UserComment;