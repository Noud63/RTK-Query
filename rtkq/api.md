import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const realEstatesApi = createApi({
    reducerPath: "realestatesApi",
    baseQuery : fetchBaseQuery({ baseUrl: "http://localhost:5000/"}),
    tagTypes:['Realestates'],
    endpoints: (builder)=> ({
        getAllRealestates: builder.query({       /* 'mutation' if you want to delete, update, post etc */
            query: () => `api/realestates/`,
            transformResponse: res => res.sort((r1, r2) => {
                return (r1.region > r2.region) ? 1 : (r1.region < r2.region) ? -1 : 0
            }),
            providesTags: ['Realestates']
        }),
        getEstateByName: builder.query({
            query: (name) => `api/realestate/${name}`,
            providesTags: ['Realestates']
        }),
        getLimitedResults: builder.query({
            query: (number) => `api/realestates/limit/${number}`,
            providesTags: ['Realestates']
        }),
        addRealestate: builder.mutation({
            query: (estate) => ({
             url: 'api/realestates',
             method: 'POST',
             body: estate
            }),
            invalidatesTags: ['Realestates']
        })
    })
})

export const { useGetAllRealestatesQuery, useGetEstateByNameQuery, useGetLimitedResultsQuery, useAddRealestateMutation } = realEstatesApi

/* ProvidesTags is for query endpoints to caches */
/* invalidatesTags is for mutation endpoint to remove from caches */

/* for usage in the components you dont't need {data, error, isLoading, isSuccess, isError} from the query when reading data */
/* you just need the function for example const {  addRealestate } = useAddRealestateMutation() */