import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';


export const countriesApi = createApi({
    reducerPath:"countriesApi",
    baseQuery:fetchBaseQuery({baseUrl:'/countries/myapi/'}),
    tagTypes:["Countries"],
    endpoints:(builder)=>({
        getCountries:builder.query({
            query:()=>"region/asia",
            providesTags:["Countries"]
        }),

    })
})
export const {useGetCountriesQuery} = countriesApi
