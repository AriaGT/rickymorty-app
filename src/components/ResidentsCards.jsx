import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ResidentsCards = ({url}) => {

  const [resident, setResident] = useState()

  useEffect(() => {
    axios.get(url)
      .then(res => setResident(res.data))
      .catch(err => console.log(err))
  }, [])

  const [status, setStatus] = useState()

  useEffect(() => {
    if (resident) {
      if (resident.status === 'Dead') {setStatus('status__dead')} else if (resident.status === 'Alive') {setStatus('status__alive')}}
  }, [resident])

  const translate = string => {
    if (string === 'unknown') {string = 'Sin información'} else
    if (string === 'Dead') {string = 'Muerto'} else
    if (string === 'Alive') {string = 'Vivo'}
    return string
  }

  return (
    <div className='resident'>
      <header className='resident__header'>
        <img src={resident?.image} alt="Rick & Morty Character" className='resident__header__img' />
        <div className='resident__header__status'>
          <div className={`resident__header__status__circle ${status}`}></div>
          <span className='resident__header__status__status'>{translate(resident?.status)}</span>
        </div>
      </header>
      <section className='info'>
        <h3 className='info__name' title={resident?.name}>{resident?.name}</h3>
        <div className='info__line'></div>
        <ul className='info__list'>
          <li className='info__list__element'><span>RAZA</span>
          <br /><p>{translate(resident?.species)}</p></li>
          <li className='info__list__element'><span>ORIGEN</span>
          <br /><p>{translate(resident?.origin.name)}</p></li>
          <li className='info__list__element'><span>APARICIÓN EN EPISODIOS</span>
          <br /><p>{resident?.episode.length}</p></li>
        </ul>
      </section>
    </div>
  )
}

export default ResidentsCards