import React, { useEffect, useState } from 'react'
import axios from 'axios'
import getRandomNumber from './utils/getRandomNumber'
import Banner from './components/Banner'
import Location from './components/Location'
import ResidentContainer from './components/ResidentContainer'
import Error from './components/Error'

function App() {

  //Se establecen los Estados
  const [location, setLocation] = useState()

  const [searchInput, setSearchInput] = useState('')

  const [suggestions, setSuggestions] = useState()

  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    let id = getRandomNumber
    if (searchInput) {id = searchInput}
    const url = `https://rickandmortyapi.com/api/location/${id}`

    axios.get(url)
      .then(res => {
        setHasError(false)
        setLocation(res.data)
      })
      .catch(err => setHasError(true))
  }, [searchInput])

  return (
    <div className='app'>
      <Banner 
        suggestions= {suggestions}
        setSuggestions= {setSuggestions}
        setSearchInput= {setSearchInput}
      />
      {
        hasError ?
        <Error />
        :
        <>
          <Location
            location= {location}
          />
          <ResidentContainer 
            location= {location}
          />
        </>
      }
    </div>
  )
}

export default App
