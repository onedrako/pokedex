import React from 'react'

import { BotPokedexStyled } from '@styles/Home/Pokedex/BotPokedex'
import { Pokeball } from '@styles/Home/Pokedex/Pokeball'
import { useSelector } from 'react-redux'

const BotPokedex = () => {
  const initialPodedexAnimation = useSelector((state: any) => state.ui.initialPokedexAnimation)
  const triggerPokedexAnimation = useSelector((state: any) => state.ui.triggerPokedexAnimation)

  return (
    <BotPokedexStyled initial={initialPodedexAnimation} trigger={triggerPokedexAnimation}>
      <div className='container'>
        <div className='circle'></div>
        <div className='background-circle'></div>
        <Pokeball src='https://i.imgur.com/XzODe9l.png' alt='pokeball' side="bot"/>
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