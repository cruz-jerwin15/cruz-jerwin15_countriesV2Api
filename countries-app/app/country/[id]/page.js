'use client'
import React,{useState,useEffect,use} from 'react'
import {useGetCountriesQuery} from '../../rtk/countriesApi';
function SingleCountry({params}) {
    const{
        data:countries,
        isLoading:isLoadingCountries,
        isError:isErrorCountries,
        isSuccess:isSuccessCountries,
        error:errorCountries
    } = useGetCountriesQuery();

    const [country,setCountry] = useState({});
    const {id} = use(params)
    console.log(id)
    useEffect(()=>{
        if(countries){
            console.log("Countries",countries);
            const found  = countries.find(c=> c.alpha2Code.toLowerCase()==String(id).toLowerCase());
            console.log("Found",found);
            setCountry(found);

        }
    },[countries])
  return (
    <>
    <h1>Name: {country.name}</h1>
    <h2>Capital: {country.capital}</h2>
    <h2>Area: {country.area}</h2>
    {
        country.borders && country.borders.length > 0 ?
           <>
             <h2>Borders: </h2>
             <ul>
                {
                    country.borders.map((border,index)=>{
                        return(
                            <li key={`${border}${index}`}>{border}</li>
                        )
                    })
                }
             </ul>
           </>
          


        :
            null
    }
   
    </>
  )
}

export default SingleCountry