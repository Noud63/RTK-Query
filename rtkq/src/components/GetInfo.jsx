import React,{useState} from 'react'
import { useGetEstateByNameQuery } from '../slices/apiSlice'
const GetInfo = ({name}) => {

    const [ name2, setName ] = useState("")
    const [ showNoShow, setShowNoShow ] = useState(false)
    const { data, isLoading } = useGetEstateByNameQuery(name2)

    const showInfo = () => {
        setName(name)
        setShowNoShow(prev => !prev)
    }

  return (
    <>
    <button type="button" onClick={showInfo} className="btn w-80 bg-red-800 text-black font-semibold h-10 mb-4">Show Info</button>
          {showNoShow ? (
            <div className="info mb-4 text-red-800 ">
          <div>Name: {data.name}</div>
          <div>Region: {data.region}</div>
          <div>City: {data.city}</div>
          <div>Location: {data.located}</div>
          <div>Price: ${data.price}</div> 
          <img src={Array.isArray(data.img) ? `../images/${data.img[0]}` : `../images/${data.img}`} alt="" className="w-80 mt-4"/> 
          </div>) 
          : 
          ("")
         }
         {isLoading && <h3 className="text-red-600">Loading....</h3>}
    </>
    )
}

export default GetInfo
