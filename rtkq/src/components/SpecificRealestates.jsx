import React, {useState, useEffect} from 'react'
import { useGetEstateByNameQuery } from '../slices/apiSlice.js'
import Overlay from './Overlay.jsx'
import close from '/images/close.png'
import ListOfChateaux from './ListOfChateaux.jsx'

const SpecificRealestates = () => {

  const [ name, setName ] = useState("")
  const [ showNoShow, setShowNoShow ] = useState(false)
  const [ message, setMessage] = useState("")
  const [ overlay, setOverlay ] = useState(false)

  let { data, error, isLoading } = useGetEstateByNameQuery(name)

  const submitHandler = (e) => {
    e.preventDefault();
    const form = e.target
    let formData = new FormData(form);
    for (let value of formData.values()) {
          if(value !== "" && value.startsWith("Château")){
          setName(value)
          setShowNoShow(true)
          form.reset()
        }else {
          form.reset()
          setName("")
          setShowNoShow(false)
          setMessage("")
          setOverlay(true)
        }
      }
  }

  useEffect(() => {
    if(data){
     setMessage(data.message)
     console.log(data)
  }
  },[data, setMessage])

  const closeSearchResult = () => {
    setShowNoShow(false)
  }
  

  return (
    <>
    <ListOfChateaux />
    
      <div className="w-80 flex justify-center flex-col mt-4 mb-8 m-auto">
            <div className="text-lg h-10 text-red-800 bg-black font-semibold">Find info on Château:</div>
            <form onSubmit={submitHandler}>
                <label>
                        <input 
                        className="text-lg h-10 text-red-800 bg-black mb-1"
                        type="text" 
                        placeholder="Enter château"
                        name="name"  /* without name attribute, an <input> element cannot provide its value and name to the server on form submission */
                        />
                </label>
                <button type="submit" className="btn w-80 bg-red-800 text-black h-10 font-semibold">Get Info by name</button>
            </form>

              {isLoading && <div>Loading...</div>}

         <div className="mt-8  text-red-800 mb-6 flex flex-row relative">
             {data && showNoShow && !message ? (
                <>
                <div>
                <div>Name: {data.name}</div>
                <div>Region: {data.region}</div>
                <div>City: {data.city}</div>
                <div>Location: {data.located}</div>
                <div>Price: ${data.price}</div>
                <img src={Array.isArray(data.img) ? `../images/${data.img[0]}` : `../images/${data.img}`} alt="" className="w-80 mt-4 border-4 border-red-800"/> 
                </div>
                <div className="absolute top-2 right-0 cursor-pointer" onClick={closeSearchResult}><img src={close} alt="" className="w-6"/></div>
                </>
                ) : (<div className="w-full text-red-800 font-semibold text-xl flex justify-center mb-6">{message}</div>)
            }
          </div>
    </div>
    {overlay ? <Overlay setOverlay={setOverlay}/> : ""}
     </>
  )
}

export default SpecificRealestates
