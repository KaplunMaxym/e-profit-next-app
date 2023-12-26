import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query";

export const eprofiAPI = createApi({
    reducerPath: 'eprofiAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000'}),
    tagTypes: ['Post'],
    endpoints: (build) => ({
        fetchAllPosts: build.query<any, any>({ // Пешрий дженерік дані які вертає, другий - дані які приймає
            query: (limit: number = 5) => ({
                url: `/endpoint`,
                params: {
                    _limit: limit
                }
            }),
            providesTags: result => ['Post']
        }),
        createPost: build.mutation<any, any>({
            query: (data) => ({
                url: `/endpoint`,
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['Post']
        }),
        updatePost: build.mutation<any, any>({
            query: (data) => ({
                url: `/endpoint/${data.id}`,
                method: 'PUT',
                body: data
            }),
            invalidatesTags: ['Post']
        }),
        deletePost: build.mutation<any, any>({
            query: (data) => ({
                url: `/endpoint/${data.id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Post']
        }),
    })
})