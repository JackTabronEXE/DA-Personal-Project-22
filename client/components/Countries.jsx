import React from 'react'
import { useParams } from 'react-router-dom'
import CountriesData from '../../data/countries'

function Countries () {
  const params = useParams()
  const country = params.code
  // const countries = CountriesData[country].countries
  // const image = CountriesData[flag].
  // console.log(countries)
  const countryObj = CountriesData.find((countryData) => {
    return country === countryData.code 
  })
  return (
    <div>
      <h2>{countryObj.name}</h2>
      <ul>
      </ul>
      </div>
)}


export default Countries