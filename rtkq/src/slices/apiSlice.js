import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const realEstatesApi = createApi({
    reducerPath: "realestatesApi",
    baseQuery : fetchBaseQuery({ baseUrl: "http://localhost:5000/"}),
    endpoints: (builder)=> ({
        getRealestates: builder.query({       /* 'mutation' if you want to delete update etc */
            query: () => 'api/realestates'
        }),
        getEstateByName: builder.query({
            query: (name) => `api/realestates/${name}`
        }),
    })
})

export const { useGetRealestatesQuery, useGetEstateByNameQuery } = realEstatesApi