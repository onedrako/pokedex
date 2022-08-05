import React from 'react'

import { TopPokedexStyled } from '@styles/Home/Pokedex/TopPokedex'

const TopPokedex = () => {
  return (
    <TopPokedexStyled>
        <div className='speaker-background'>
          <div className='speaker' >
            <div className='speaker-light'></div>
          </div>
        </div>
        <div className='container'>
          <div className='circle'></div>
          <div className='background-circle'></div>
        </div>
    </TopPokedexStyled>
  )
}

export {TopPokedex}