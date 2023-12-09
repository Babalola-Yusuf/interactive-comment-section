import { useState } from 'react';
import Comment from './Comment';
import UserComment from './UserComment';
import Replies from './Replies';
import UserCommentInputField from './UserCommentInputField';

function App() {

  return (
    <div className=' bg-Very-light-gray flex justify-center p-3'>
      <div className="flex flex-col w-full md:w-3/4  lg:w-3/5  items-end">
        <div className=' w-full'>
          <Comment i={0}></Comment>
          <Comment i={1}></Comment>
        </div>

        <div className=' w-11/12 '>
          <Replies j={0}></Replies>
          <UserComment j={1}></UserComment>
        </div>
        <UserCommentInputField i={0}></UserCommentInputField>
      </div>
     
    </div>
  )
}

export default App
