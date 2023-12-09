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
        <div className=" bg-white sm:flex items-start p-6 gap-6 rounded-lg mb-6 relative h-60 md:h-44">
           <Score i={j}></Score> 
                <div className="flex justify-between absolute md:left-20">
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
                   
                    
                </div>
                <p className=" text-Grayish-Blue absolute top-14 md:bottom-6 md:left-20"><span className=" text-Moderate-blue font-semibold">@{replyingTo}</span> {content}</p>
                <div className="flex absolute bottom-6 gap-6 xl:top-6 right-6 items-start">
                    <DeleteBtn></DeleteBtn>
                    <EditBtn></EditBtn>
                </div>
            
        </div>
    )
    }

export default UserComment;