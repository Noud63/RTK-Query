import React,{useState} from 'react'
import { useGetRealestatesQuery, useGetEstateByNameQuery } from '../slices/apiSlice'
import FindChateau from './FindChateau'
import GetInfo from './getInfo'
// import Overlay from './Overlay.jsx'

const GetRealEstates = () => {

const { data, error, isLoading } = useGetRealestatesQuery()
const [ overlay, setOverlay ] = useState(false)

return (
  <>
    <div className="w-full h-full flex items-center flex-col mt-8">
       {data && data.slice(0,5).map( (estate, index) => {
        const { _id, name, city, region, } = estate
        return (
             <div key={index} className="w-80 flex flex-col">
                 <div className="w-80 text-lg text-red-800 flex justify-start">Estate:
                 <span className="font-semibold">&nbsp;{name}</span>
                 </div>
                        {isLoading && <h3>Loading....</h3>}

                  <GetInfo name={name}/>

             </div>
        )
       })}

       <FindChateau/>
          
    </div>
    
    </>
  )
}

export default GetRealEstates
