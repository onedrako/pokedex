import React from 'react'
import { PokemonChosenStyled, TeamContainer } from '@styles/Home/PokemonTeam/PokemonTeam'
import PokemonTeamTitles from './PokemonTeamTitles'
import SkeletonPokemonTeam from './SkeletonPokemonTeam'
import { shallowEqual, useSelector } from 'react-redux'
import { PokemonWithDetails } from '@customTypes/pokemonCustomTypes'
import {PokemonTeamMember} from './PokemonTeamMember'

const PokemonTeam = () => {
  const userPokemonTeam: PokemonWithDetails[] = useSelector((state: any) => state.pokemon.pokemonTeam, shallowEqual)
  const loading: boolean = useSelector((state: any) => state.ui.loading)
  return (
    <TeamContainer>
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
