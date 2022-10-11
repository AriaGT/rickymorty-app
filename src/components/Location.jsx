import React, { useEffect, useState } from 'react'
import './styles/location.css'

const Location = ({location}) => {

  const [info, setInfo] = useState({
    name: '--',
    type: '--',
    dimension: '--',
    residents: {length: '--'}
  })

  useEffect(() => {
    (location) ? setInfo(location) : null
  }, [location])

  const translateUnknown = unknown => {
    if (unknown === 'unknown' || unknown == false) {unknown = 'Sin información'}
    return unknown
  }
  
  return (
    <ul className='location-container'>
      <li>
        <h3> Nombre: </h3><br />
        {translateUnknown(info.name)}
      </li>
      <li>
        <h3> Tipo: </h3><br />
        {translateUnknown(info.type)}
      </li>
      <li>
        <h3> Dimensión: </h3><br />
        {translateUnknown(info.dimension)}
      </li>
      <li>
        <h3> Población: </h3><br />
        {info.residents.length}
      </li>
    </ul>
  )
}

export default Location