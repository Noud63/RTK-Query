import React from 'react'
import closeIcon from '../../images/close.png'

const Overlay = ({setOverlay}) => {
    const closeModal = () => {
    setOverlay(false)
    }
  return (
    <div className="w-full h-full overflow-x-hidden overflow-y-hidden absolute flex items-center justify-center inset-0">
       <div className="w-[20rem] md:w-[32rem] h-80 flex items-center justify-center bg-red-950 opacity-90 border-2 border-red-600 rounded-lg shadow-[0px_0px_10px_red,inset_0px_0px_100px_black,inset_0px_0px_50px_black] z-50 
                            fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
               <div className="w-full text-red-600 text-4xl flex items-center justify-center">Enter valid input!</div>
               <div className="text-2xl text-black absolute top-6 right-6 cursor-pointer" onClick={closeModal}><img src={closeIcon} alt="" className="w-8"/></div>
       </div>
       
    </div>
  )
}

export default Overlay
