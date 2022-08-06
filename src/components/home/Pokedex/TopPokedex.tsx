import React from 'react'

import { TopPokedexStyled } from '@styles/Home/Pokedex/TopPokedex'
import { Pokeball } from '@styles/Home/Pokedex/Pokeball'

const TopPokedex = () => {
  return (
    <TopPokedexStyled className="move">
        <div className='speaker-background'>
          <div className='speaker' >
            <div className='speaker-light'></div>
          </div>
        </div>
        <div className='container'>
          <div className='circle'></div>
          <div className='background-circle'></div>
          <Pokeball src='https://i.imgur.com/XzODe9l.png' alt='pokeball' side="top" />
        </div>
    </TopPokedexStyled>
  )
}

export {TopPokedex}