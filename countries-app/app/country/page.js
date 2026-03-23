'use client'
import React,{useEffect} from 'react';
import {useGetCountriesQuery} from '../rtk/countriesApi';
import Card from '../components/Card/Card';

function Country() {
    const{
        data:countries,
        isLoading:isLoadingCountries,
        isError:isErrorCountries,
        isSuccess:isSuccessCountries,
        error:errorCountries
    } = useGetCountriesQuery();

    useEffect(()=>{
        if(countries){
            console.log("Countries",countries)
        }
        
    },[countries])

  return (
    <>
        <main className="container">
            {isLoadingCountries && <h2>Loading Data...</h2>}
            {isErrorCountries && <h2>Something went wrong...</h2>}
            {isSuccessCountries &&
                 <div className="cards-grid">
                    {
                        countries.map((country,index)=>{
                            return(
                                <Card 
                                key={country.numericCode}
                                flag={country.flag}
                                name={country.name}
                                population={country.population}
                                region={country.region}
                                capital={country.capital}
                                />
                            )
                        })
                    }
                
                </div>
            
            }
   
  </main>
    </>
  )
}

export default Country