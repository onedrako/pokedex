import { SkeletonPokemonItem } from '@styles/Home/PokemonTeam/SkeletonTeamItem'
import React from 'react'

const SkeletonPokemonTeam = () => {
  return (
    <SkeletonPokemonItem>
      <img className='Pokemon-Team--skeleton-image' src='https://i.imgur.com/Q5tAVHW.png' alt="" />
      <div className='Pokemon-Team--skeleton-name'></div>
    </SkeletonPokemonItem>
  )
}

export default SkeletonPokemonTeam
