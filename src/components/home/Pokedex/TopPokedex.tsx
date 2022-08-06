import React, { useEffect } from 'react'

import { TopPokedexStyled } from '@styles/Home/Pokedex/TopPokedex'
import { Pokeball } from '@styles/Home/Pokedex/Pokeball'
import { useDispatch, useSelector } from 'react-redux'
import { setInitialPokedexAnimation, setTriggerPokedexAnimation } from '@redux/slices/uiSlice'

const TopPokedex = () => {
  const initialPodedexAnimation = useSelector((state: any) => state.ui.initialPokedexAnimation)
  const triggerPokedexAnimation = useSelector((state: any) => state.ui.triggerPokedexAnimation)

  console.log('initialPodedexAnimation', initialPodedexAnimation)
  console.log('triggerPokedexAnimation', triggerPokedexAnimation)

  
  
  const dispatch = useDispatch()

  useEffect(() => {
    setTimeout(() => {
      dispatch(setInitialPokedexAnimation(false))
    } , 1000)
  })

  useEffect(() => {
    if(!triggerPokedexAnimation) {
      setTimeout(() => {
        dispatch(setTriggerPokedexAnimation(false))
      } , 1000)
    }
    }, [triggerPokedexAnimation])

  return (
    <TopPokedexStyled initial={initialPodedexAnimation} trigger={triggerPokedexAnimation}>
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