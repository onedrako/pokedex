import React from 'react'

import { BotPokedexStyled } from '@styles/Home/Pokedex/BotPokedex'

const BotPokedex = () => {
  return (
    <BotPokedexStyled>
      <div className='container'>
        <div className='circle'></div>
        <div className='background-circle'></div>
      </div>
      <div className='light-container'>
        <div className='light'>
          <div className='light-red'></div>
        </div>
        <div className='light'>
          <div className='light-yellow'></div>
        </div>
        <div className='light'>
          <div className='light-green'></div>
        </div>
      </div>
    </BotPokedexStyled>
  )
}

export {BotPokedex}