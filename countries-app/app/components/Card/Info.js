import React from 'react'

function Info(props) {
  return (
    <>
     <div className="card-content">
          <h2 className="card-title"><a href={`country/${props.alphacode}`}>{props.name}</a></h2>
          <p className="card-detail"><span className="label">Population:</span> <span className="value">{props.population}</span></p>
          <p className="card-detail"><span className="label">Region:</span> <span className="value">{props.region}</span></p>
          <p className="card-detail"><span className="label">Capital:</span> <span className="value">{props.capital}</span></p>
        </div>
    </>
  )
}

export default Info