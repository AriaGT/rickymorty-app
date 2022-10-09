import axios from 'axios'
import React, { useEffect, useState } from 'react'
import banner__img from '../assets/banner__img.jpg'
import banner__text from '../assets/banner__text.svg'
import './styles/banner.css'

const Banner = ({suggestions, setSuggestions, setSearchInput, hideSuggestions, showSuggestions}) => {

  const handleKeyPress = event => {
    if(event.key === 'Enter'){
      setSearchInput(event.target.value)
    }
  }
  
  const handleChange = event => {

    if(event.target.value === '') {
      return setSuggestions()
    }

    const URL = `https://rickandmortyapi.com/api/location/?name=${event.target.value}`
    axios.get(URL)
      .then(res => setSuggestions(res.data.results))
      .catch(err => console.log(err))
  }

  const handleClick = id => (setSearchInput(id))

  const [status, setStatus] = useState()

  useEffect(() => {
    (suggestions) ? setStatus('app__banner__suggestList__padding') : setStatus('')
  }, [suggestions])

  return (
    <article className="banner" id='banner'>
      <img className='banner__img' src={banner__img} alt="rick and morty " />
      <img className='banner__text' src={banner__text} alt="Rick And Morty" />
      <input className='banner__input' type="text" placeholder="Escribe el nombre de la ubicación"
      onKeyDown={handleKeyPress} onChange={handleChange}/>
      <div className={`banner__suggestList ${status}`}>
        {
          suggestions?.map(location => (
            <p className='banner__suggestList__element' onClick={() => {
              handleClick(location.id)
              setStatus('hidden')
            }} key={location.id}>({location.id}) {location.name}</p>
          ))
        }
      </div>
    </article>
  )
}

export default Banner