"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([])
  const submitHandler = (e)=>{
    e.preventDefault()
    setmainTask([...mainTask,{title, desc}])
    setdesc("")
    settitle("")
    console.log(mainTask)
  }

const deleteHandler = (i) =>{
  let copyTask = [...mainTask]
  copyTask.splice(i,1)
  setmainTask(copyTask)
}

let renderTask = <h2>No Task Available</h2>
if(mainTask.length > 0){
  renderTask = mainTask.map((t,i)=>{
    return (
      <li key={i} className='flex items-center justify-between'>
    <div className='flex items-center justify-between mb-5 w-2/3'>
      <h5 className='text-2xl font-semibold'>{t.title}</h5>
      <h6 className='text-l font-medium'>{t.desc}</h6>
    </div>
    <button onClick={()=>{
      deleteHandler(i)
    }}
     className='bg-red-400 text-white px-4 py-2 rounded-md font-bold'>Delete</button>
    </li>)
  })
}
  return (
    <>
    <h1 className='bg-black text-white p-5 text-2xl font-bold text-center'>My Todo List</h1>
    <form className="p-5" onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Add a new task"
          className="border border-gray-300 p-2 rounded m-8" value={title} onChange={(e)=>{
            settitle(e.target.value)
          }}  
        />
         <input
          type="text"
          placeholder="Enter Description"
          className="border border-gray-300 p-2 rounded m-8" value={desc} onChange={(e)=>{
            setdesc(e.target.value)
          }}
        />
        <button className='bg-black text-white px-4 py-2 text-l rounded-md'>
          Add Task
        </button>
      </form>
    <hr />
    <div className='p-8 bg-slate-200'>
      <ul>
        {renderTask}
      </ul>
    </div>
    </>
  )
}

export default page