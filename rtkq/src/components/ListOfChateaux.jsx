import React from 'react'
import chateaux from '../data/realestates'

const ListOfChateaux = () => {
  return (
    <div className="w-full flex justify-center mt-4 mb-8 pl-6">
                <div className="flex flex-col">
                   <div className="w-52 text-xl h-10 text-red-800 bg-black font-bold underline">List of châteaux:</div>
                        <div className="flex items-center flex-row flex-wrap border-b-2 border-red-800 pb-4 pl-8">
                            {chateaux && chateaux.map((chateau,index) => {
                            return (
                                <div key={index} className="text-xl text-red-800 flex flex-row pl-1">
                                    <div>{chateau.name},</div>
                                </div>
                               )
                            })}
                       </div>
                </div>
      </div> 
  )
}

export default ListOfChateaux
