import React,{useEffect, useState} from 'react'
import { useGetAllRealestatesQuery, useGetLimitedResultsQuery } from '../slices/apiSlice'
import FindChateau from './FindChateau'
import GetInfo from './getInfo'
import Select from "react-select";


const GetAllRealEstates = () => {

const [ number, setNumber ] = useState({ label: 3, value: 3 })
console.log(number.value)

const { data, error, isLoading } = useGetAllRealestatesQuery()
// const [ slices, setSlices ] = useState(5)
// const [ currentSlice, setCurrentSlice ] = useState(0)

// const { data, isLoading, error} = useGetLimitedResultsQuery(number.value)

return (
  <>
    <div className="w-full h-full flex items-center flex-col mt-16">
       {data && data.map( (estate, index) => {
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
        <div>

        </div>
       {/* <FindChateau/> */}
      
    </div>
    
     
  </>
  )
}

export default GetAllRealEstates
