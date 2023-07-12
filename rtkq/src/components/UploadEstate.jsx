import React,{useState} from 'react'
import { useAddRealestateMutation } from '../slices/apiSlice'

const UploadEstate = () => {

let [data, setData] = useState({like:false}) 

const [ addRealestate ] = useAddRealestateMutation()

const upLoadData = e => {
     if(e.target.name === 'img'){
         setData({
                ...data,
                [e.target.name]: [e.target.value] /* data.img is an array */
        })
     }else{
         setData({
                ...data,
               [e.target.name]: e.target.value
        })
     }
   }
 
  const onSubmitHandler = async(e) => {
    e.preventDefault()
    console.log(data)
    try {
        const res = await addRealestate(data)
        console.log(res.data)

    } catch (error) {
        console.log(error.message)
    }
     e.target.reset()
  }

  return (
    <div className="w-72 m-auto flex justify-center flex-col items-center mt-8">
      <span className="text-red-800 text-2xl mb-4">Add Estate to database</span>
      
        <form onSubmit={onSubmitHandler} className="text-red-800 w-full">

          <label htmlFor="name" className="w-1/3">Name:</label>
            <input
            className="mb-3"
            type="text" 
            name="name"
            placeholder="Enter name"
            onChange={upLoadData}
            required
            />

            <label htmlFor="img" className="w-1/3">Img:</label>
            <input
            className="mb-3"
            type="text" 
            name="img"
            placeholder="name.jpg"
            onChange={upLoadData}
            required
            />

            <label htmlFor="price" className="w-1/3">Price:</label>
            <input
            className="mb-3"
            type="text" 
            name="price"
            placeholder="Enter price"
            onChange={upLoadData}
            required
            />

            <label htmlFor="region" className="w-1/3">Region:</label>
            <input
            className="mb-3"
            type="text" 
            name="region"
            placeholder="Enter region"
            onChange={upLoadData}
            required
            />

            <label htmlFor="departement" className="w-1/3">Departement:</label>
            <input
            className="mb-3"
            type="text" 
            name="departement"
            placeholder="Enter departement"
            onChange={upLoadData}
            required
            /> 

            <label htmlFor="city" className="w-1/3">City:</label>
            <input
            className="mb-3"
            type="text" 
            name="city"
            placeholder="Enter city"
            onChange={upLoadData}
            required
            />

            <label htmlFor="bedrooms" className="w-1/3">Bedrooms:</label>
            <input
            className="mb-3"
            type="text" 
            name="bedrooms"
            placeholder="Enter number of bedrooms"
            onChange={upLoadData}
            required
            />

            <label htmlFor="bathrooms" className="w-1/3">Bathrooms:</label>
            <input
            className="mb-3"
            type="text" 
            name="bathrooms"
            placeholder="Enter number of bathrooms"
            onChange={upLoadData}
            required
            />

            <label htmlFor="livingspace" className="w-1/3">Livingspace:</label>
            <input
            className="mb-3"
            type="text" 
            name="livingspace"
            placeholder="Enter number of m2"
            onChange={upLoadData}
            required
            />

            <label htmlFor="area" className="w-1/3">Area:</label>
            <input
            className="mb-3"
            type="text" 
            name="area"
            placeholder="Enter number of acres"
            onChange={upLoadData}
            required
            />

            <label htmlFor="map" className="w-1/3">Map:</label>
            <input
            className="mb-3"
            type="text" 
            name="map"
            placeholder="/assets/maps/nameofmap.png"
            onChange={upLoadData}
            required
            /> 

             <label htmlFor="located" className="w-1/3">Located:</label>
            <input
            className="mb-3"
            type="text" 
            name="located"
            placeholder="North, Center, South"
            onChange={upLoadData}
            required
            /> 
          
        <button type="submit" className="w-full bg-red-800 mt-4 p-2 text-lg text-black font-semibold">Upload</button>
        </form>
      </div>
    
  )
}

export default UploadEstate
