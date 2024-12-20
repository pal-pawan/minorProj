'use client';

import React, { useState } from 'react';

const page = () => {

  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState(false);

  const textInputHandler = () => {

  }
  const submitHandler = () => {

  }

  return (
    <>
      <div className='w-full h-screen flex items-center justify-center bg-slate-900'>
        <div className=' flex align-middle flex-col justify-around h-4/5 w-4/5 bg-slate-300/20 rounded-lg'>
          <h1 className=' font-semibold text-gray-100 outline-sky-500 bg-slate-400/20 rounded-md text-center px-2 py-2 text-4xl'>TODO PAL</h1>
        </div>
      </div>
    </>
  )
}

export default page;