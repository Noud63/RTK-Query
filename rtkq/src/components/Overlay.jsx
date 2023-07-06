import React from 'react'

const Overlay = ({setOverlay}) => {
    const closeModal = () => {
    setOverlay(false)
    }
  return (
    <div className="w-screen h-screen overflow-x-hidden overflow-y-hidden fixed flex items-center justify-center inset-0">
       <div className="w-[20rem] md:w-[32rem] h-80 flex items-center justify-center bg-red-950 opacity-90 relative border-2 border-red-600 rounded-lg">
               <div className="w-full text-red-600 text-2xl flex items-center justify-center">Enter valid input!</div>
               <div className="text-2xl text-red-600 absolute top-6 right-6 cursor-pointer" onClick={closeModal}>X</div>
       </div>
       
    </div>
  )
}

export default Overlay
