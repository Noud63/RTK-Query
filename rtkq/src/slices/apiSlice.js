import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: "realestatesApi",
    baseQuery : fetchBaseQuery({ baseUrl: ""}),   // see vite.config.js
     tagTypes:['Realestates', 'Users'],
    endpoints: () => ({})
    })



/* ProvidesTags is for query endpoints to caches */
/* invalidatesTags is for mutation endpoint to remove from caches */

/* for usage in the components you dont't need {data, error, isLoading, isSuccess, isError} from the query when reading data */
/* you just need the function for example const {  addRealestate } = useAddRealestateMutation() */