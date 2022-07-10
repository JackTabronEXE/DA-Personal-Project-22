import React from 'react'
import continentsData from '../../data/continents'
import { Link } from 'react-router-dom'


function Nav() {
  const continents = Object.keys(continentsData)
  console.log(continents)
  return (
    <nav>
     <h2>Nav</h2>
      <ul>
        <li key='1'>
          <Link to='/info'>Info</Link>
        </li>
        {continents.map((continents) => {
          return <li key={continents}>
            <Link to={`/continents/${continents}`}>{continents}</Link>
          </li>
        })}
      </ul>
    </nav>
  )
}


export default Nav
