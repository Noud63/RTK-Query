import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const realEstatesApi = createApi({
    reducerPath: "realestatesApi",
    baseQuery : fetchBaseQuery({ baseUrl: "http://localhost:5000/"}),
    endpoints: (builder)=> ({
        getAllRealestates: builder.query({       /* 'mutation' if you want to delete, update etc */
            query: () => `api/realestates/`
        }),
        getEstateByName: builder.query({
            query: (name) => `api/realestate/${name}`
        }),
        getLimitedResults: builder.query({
            query: (number) => `api/realestates/limit/${number}`
        }),
    })
})

export const { useGetAllRealestatesQuery, useGetEstateByNameQuery, useGetLimitedResultsQuery } = realEstatesApi