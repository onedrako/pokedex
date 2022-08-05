//Libraries
import React from 'react'
//Redux
import { shallowEqual, useSelector } from 'react-redux'

//Styles
import { PokemonChosenStyled, TeamContainer } from '@styles/Home/PokemonTeam/PokemonTeam'

//Cpmponents
import {PokemonTeamTitles} from './PokemonTeamTitles'
import {PokemonTeamMember} from './PokemonTeamMember'

//Types TS
import { PokemonWithDetails } from '@customTypes/pokemonCustomTypes'

const PokemonTeam = () => {
  const userPokemonTeam: PokemonWithDetails[] = useSelector((state: any) => state.pokemon.pokemonTeam, shallowEqual)
  const showDetails = useSelector((state: any) => state.ui.showDetails, shallowEqual)

  return (
    <TeamContainer showDetails={showDetails}>
      <PokemonTeamTitles/>
      <img src="https://i.imgur.com/Q5tAVHW.png" alt=""/>
      {userPokemonTeam.length === 0 &&
        <h2 className='pokemon-team-empty'>Es peligro andar por la hierba alta sin pokemon, elige a tus Pokemon favoritos para tu equipo</h2>
      }
      {userPokemonTeam.length > 0 &&
        <PokemonChosenStyled>
          {userPokemonTeam.map((pokemon: PokemonWithDetails) => (
            <PokemonTeamMember key={`pokemon-team-${pokemon.id}`} pokemon={pokemon} />
          ))}
        </PokemonChosenStyled>
        
      }
    </TeamContainer>
  )
}

export { PokemonTeam }
