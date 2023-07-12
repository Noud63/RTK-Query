import React,{useEffect, useState} from 'react'
import { useGetAllRealestatesQuery } from '../slices/apiSlice'
import GetInfo from './getInfo'
import loader from '../assets/loader.gif'

const GetRealEstates = () => {

const { data, error, isLoading } = useGetAllRealestatesQuery()

return (
  <>
    <div className="w-full h-full flex items-center flex-col mt-16">
      <div className="w-80 text-red-800 text-2xl flex justify-center border border-red-800 p-2 items-center mb-6">All Real Estates</div>
        {error && <img src={loader} alt="loader" className="w-80"/>}
       {data && data.map( (estate, index) => {
        const { _id, name, city, region, } = estate
        return (
              <div key={index} className="w-80 flex flex-col">
                 <div className="w-80 text-lg text-red-800 flex justify-start">Estate:
                 <span className="font-semibold">&nbsp;{name}</span>
                 </div>
                    <GetInfo name={name}/>
              </div>
            )
       })}
    </div>
  </>
  )
}

export default GetRealEstates
