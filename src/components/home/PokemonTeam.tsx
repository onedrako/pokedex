import React from 'react'
import { PokemonChosenStyled, TeamContainer } from '@styles/Home/PokemonTeam/PokemonTeam'
import PokemonTeamTitles from './PokemonTeamTitles'
import SkeletonPokemonTeam from './SkeletonPokemonTeam'

const PokemonTeam = () => {
  return (
    <TeamContainer>
      <PokemonTeamTitles/>
      <img src="https://i.imgur.com/Q5tAVHW.png" alt="" />
      <PokemonChosenStyled>
        <SkeletonPokemonTeam/>
        <SkeletonPokemonTeam/>
        <SkeletonPokemonTeam/>
        <SkeletonPokemonTeam/>
        <SkeletonPokemonTeam/>
        <SkeletonPokemonTeam/>
      </PokemonChosenStyled>
    </TeamContainer>
  )
}

export { PokemonTeam }
