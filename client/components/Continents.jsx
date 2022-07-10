import React from 'react'
import { useParams, Link } from 'react-router-dom'
import continentData from '../../data/continents'


function Continents () {
  const params = useParams()
  const continent = params.continent
  const countries = continentData[continent].countries
  const image = continentData[continent].image
  // console.log(countries)
  return (
    <div>
      <h2>{continent}</h2>
      <img src={'/images/' + image}/>
      <ul>
        {countries.map((country) => {
          // console.log(country)
          return <li key={country.code}> 
          <Link to={`/continent/${continent}/${country.code}`} > {country.name}</Link>
          </li>
        })}
      </ul>
      </div>
)}



export default Continents
