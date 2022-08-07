//Libraries
import React from 'react'
//Redux
import { useSelector } from 'react-redux'

//Components
import {PokemonImage} from './PokemonImage'

//Styles
import { PokemonTeamMiniBarContainer } from '@styles/Layout/PokemonTeamMiniBar/PokemonTeamMiniBar'

//Types TS
import { PokemonWithDetails } from '@customTypes/pokemonCustomTypes'


const PokemonTeamMiniBar = () => {
  const pokemonTeam: PokemonWithDetails[]  = useSelector((state: any) => state.pokemon.pokemonTeam)  
  const pokemonBarElements = [...pokemonTeam]

  for (let i = 0; i < 6 - pokemonTeam.length; i++) {
    pokemonBarElements.push({} as PokemonWithDetails)
  }

  return (
    <PokemonTeamMiniBarContainer onClick={() => window.window.scroll({
        top: 100,
        left: 100,
        behavior: 'smooth'
      }) }>
      {pokemonBarElements.map((pokemon: PokemonWithDetails, index) => {
        return (
          <PokemonImage key={`pokemonMiniTeam-${pokemon.name}-${index}`} pokemon={pokemon} />
          )}
      )}
    </PokemonTeamMiniBarContainer>
  )
}

export {PokemonTeamMiniBar}