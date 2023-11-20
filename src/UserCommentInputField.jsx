import React from "react";
import Image from "./Image";
import jsonData from './data.json';
import SendBtn from "./SendBtn";

function UserCommentInputField() {

    return(
        <div className=" flex items-start justify-between w-full bg-white p-5 rounded-xl">
            <div className=" h-10 w-10 object-fill">
            <Image></Image>
            </div>
            <textarea name="" id=""  className=" border w-3/4 rounded-lg border-Light-gray text-Light-grayish-blue p-5 resize-none" placeholder="Add a comment..."></textarea>
            <SendBtn></SendBtn>
        </div>
    )
    }

export default UserCommentInputField;