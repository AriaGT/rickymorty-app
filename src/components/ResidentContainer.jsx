import React, { useEffect, useState } from 'react'
import ResidentsCards from './ResidentsCards'

const ResidentContainer = ({location}) => {

  const [residents, setResidents] = useState()

  useEffect(() => {
    (location?.residents == {length: '--'}) ? null : setResidents(location?.residents)
  }, [location])

  return (
    <div id='container'>
      {
        residents?.map(url => (
          <ResidentsCards
            key={url}
            url={url}
          />
        ))
      }
    </div>
  )
}

export default ResidentContainer