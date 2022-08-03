import { SkeletonContainer } from '@styles/Home/PokemonList/SkeletonPokemonItem'
import React from 'react'

const SkeletonPokemonItem = () => {
  return (
    <SkeletonContainer>
      <div className='pokemon-item__add-remove'></div>
      <div className='pokemon-item__sprite'></div>
      <div className='pokemon-item__name'></div>
      <div className='pokemon-item__types'>
        <div className='pokemon-item__types--type'></div>
        <div className='pokemon-item__types--type'></div>
      </div>
    </SkeletonContainer>
  )
}

export default SkeletonPokemonItem
