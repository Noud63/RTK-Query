import { apiSlice } from "./apiSlice";

const usersEndPointsApi = apiSlice.injectEndpoints({
    endpoints: (builder)=> ({
       registerUser: builder.mutation({
            query: (user) => ({
                url: 'api/users',
                method: 'POST',
                body: user
            }),
            invalidatesTags: ['Users']
        }),
        loginUser: builder.mutation({
            query: (user) => ({
                url: 'api/users/login',
                method: 'POST',
                body: user
            }),
            invalidatesTags: ['Users']
        }),
        logout: builder.mutation({
            query: () => ({
                url: 'api/users/logout',
                method: 'POST'
            }),
            invalidatesTags: ['Users']
        }),
        updateCredentials: builder.mutation({
            query: (credentials) => ({
                url: 'api/users/update',
                method: 'PUT',
                body: credentials
            }),
            invalidatesTags: ['Users']
        })
})
})

export const {  
    useRegisterUserMutation,
    useLoginUserMutation,
    useLogoutMutation,
    useUpdateCredentialsMutation
} = usersEndPointsApi

/* ProvidesTags is for query endpoints to caches */
/* invalidatesTags is for mutation endpoint to remove from caches */

/* for usage in the components you dont't need {data, error, isLoading, isSuccess, isError} from the query when reading data */
/* you just need the function for example const {  addRealestate } = useAddRealestateMutation() */