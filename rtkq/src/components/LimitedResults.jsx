import React,{useEffect, useState} from 'react'
import { useGetLimitedResultsQuery } from '../slices/apiSlice'
import GetInfo from './getInfo'
import Select from "react-select";

const selectOptions = [
  { value: 1, label: 1 },
  { value: 2, label: 2 },
  { value: 3, label: 3 },
  { value: 4, label: 4 },
  { value: 5, label: 5 },
  { value: 6, label: 6 },
  { value: 7, label: 7 },
  { value: 8, label: 8 },
  { value: 9, label: 9 },
  { value: 10, label: "All Results"}
];

const colourStyles = {
  menuList: styles => ({
    ...styles,
    background: 'black',
    color: "red",
    "::-webkit-scrollbar": {
      width: "8px",
      height: "0px",
    },
    "::-webkit-scrollbar-track": {
      background: "#000",
      borderRadius: "10px"
    },
    "::-webkit-scrollbar-thumb": {
      background: "darkred",
      borderRadius: "10px"
    },
    "::-webkit-scrollbar-thumb:hover": {
      background: "#c10005"
    }
  }),
  option: (styles, { isFocused, isSelected }) => ({
    ...styles,
    color:"red",
    background: "black",
    zIndex: -5,
  }),
  menu: base => ({
    ...base,
     color: "red",
    zIndex: -5,
  }),
  control: (base, state) => ({
    ...base,
    border: "red",
    // This line disable the blue border
    boxShadow: state.isFocused ? "red" : "red",
    '&:hover': {
       border: state.isFocused ? "red" : "red",
       "&:hover": {
        borderColor: "red",
      },
    
    },
    background: 'black',
    borderColor: "darkred",
    width: "320px",
    zIndex: -0
})
}

const LimitedResults = () => {

const [ number, setNumber ] = useState({ label: 3, value: 3 })
console.log(number.value)

const { data, isLoading, error} = useGetLimitedResultsQuery(number.value)

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
       <div className="w-80 text-red-800 mb-2 mt-8 text-lg font-semibold">Number of results:</div>
      <Select
       styles={colourStyles}
        isClearable={false}
        className="react-select"
        classNamePrefix="select"
        options={selectOptions}
        onChange={(chioce) => setNumber(chioce)}
      />
    
          
    </div>
    
     
  </>
  )
}

export default LimitedResults
