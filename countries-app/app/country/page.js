'use client'
import React,{useState,useEffect} from 'react';
import {useGetCountriesQuery} from '../rtk/countriesApi';
import Card from '../components/Card/Card';

function Country() {
    const inputStyle ={
        width:"30%",
        height:"40px",
        fontSize:"18px"
    }
    const buttonStyle ={
        width:"200px",
        height:"40px",
        fontSize:"18px"
    }
    const [search,setSearch] = useState("");
    const [option,setOption] = useState("name");
    const [filteredCountry,setFilteredCountry] = useState([]);

    const [numberCountries,setNumberCountries] = useState(10);
    const [startCountry,setStartCountry] = useState(0);

    const{
        data:countries,
        isLoading:isLoadingCountries,
        isError:isErrorCountries,
        isSuccess:isSuccessCountries,
        error:errorCountries
    } = useGetCountriesQuery();

    useEffect(()=>{
        if(countries){
            console.log("Countries",countries);
            setFilteredCountry(countries.slice(startCountry,numberCountries));
        }
    },[countries,startCountry]);

    useEffect(()=>{
        
        if(option=="name"){
            var filtered = countries?.filter(country=> country?.name.toLowerCase().includes(search.toLowerCase()));
        }else{
            var filtered = countries?.filter(country=> country?.capital?.toLowerCase().includes(search.toLowerCase()));
        }
      
        console.log("Filtered",filtered);
        setFilteredCountry(filtered);
    },[search])

    useEffect(()=>{
        console.log("Option",option);
       
    },[option])

    const previousCountries=()=>{
         setStartCountry(prev=>prev-10);
        setNumberCountries(prev=>prev-10);
    }

    const nextCountries=()=>{
        setStartCountry(prev=>prev+10);
        setNumberCountries(prev=>prev+10);
    }

  return (
    <>
        <main className="container">
            <input 
            style={inputStyle} 
            type="text" 
            placeholder="Search for a country..."
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            />
            <select
            style={inputStyle}
            value={option}
            onChange={(e)=>setOption(e.target.value)} 
            >

                <option value="name">Name</option>
                <option value="capital">Capital</option>
            </select>


            {isLoadingCountries && <h2>Loading Data...</h2>}
            {isErrorCountries && <h2>Something went wrong...</h2>}
            {isSuccessCountries &&
                <>
                 <div className="cards-grid">
                    {
                        filteredCountry?.map((country,index)=>{
                            return(
                                <Card 
                                key={country.numericCode}
                                alphacode={country.alpha2Code}
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
                    {
                        startCountry<=0 ?
                          <button disabled style={buttonStyle}>Previous</button>
                        :
                          <button onClick={()=>previousCountries()} style={buttonStyle}>Previous</button>
                    }
                   {
                    countries.length <= numberCountries ?
                        <button disabled  style={buttonStyle}>Next</button>
                    :
                        <button onClick={()=>nextCountries()}  style={buttonStyle}>Next</button>
                   }
                    
                   
                </>
            
            }
   
  </main>
    </>
  )
}

export default Country