import React from 'react'
import Flag from './Flag'
import Info from './Info'

function Card(props) {
  return (
    
      <article className="card">
       <Flag flag={props.flag}/>
       <Info
        name={props.name}
        population={props.population}
        region={props.region}
        capital={props.capital}
       />
      </article>

      
   
  )
}

export default Card