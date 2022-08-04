import React from 'react'
import { PokemonChosenStyled, TeamContainer } from '@styles/Home/PokemonTeam/PokemonTeam'
import PokemonTeamTitles from './PokemonTeamTitles'
import SkeletonPokemonTeam from './SkeletonPokemonTeam'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { PokemonWithDetails } from '@customTypes/pokemonCustomTypes'
import {PokemonTeamMember} from './PokemonTeamMember'

const PokemonTeam = () => {
  const dispatch = useDispatch()
  const pokemonTeam = useSelector((state: any) => state.pokemon.pokemon, shallowEqual).filter((pokemon: PokemonWithDetails) => pokemon.team)
  const loading = useSelector((state: any) => state.ui.loading)
  console.log("pokemonTeam",pokemonTeam)
  return (
    <TeamContainer>
      <PokemonTeamTitles/>
      <img src="https://i.imgur.com/Q5tAVHW.png" alt=""/>
      {!loading && pokemonTeam.length === 0 &&
        <h2 className='pokemon-team-empty'>Es peligro andar por la hierba alta sin pokemon, elige a tus Pokemon favoritos para tu equipo</h2>
      }
      {loading && (
        <PokemonChosenStyled>
          <SkeletonPokemonTeam/>
          <SkeletonPokemonTeam/>
          <SkeletonPokemonTeam/>
          <SkeletonPokemonTeam/>
          <SkeletonPokemonTeam/>
          <SkeletonPokemonTeam/>
        </PokemonChosenStyled>
      )}
      {!loading && pokemonTeam.length > 0 &&
        <PokemonChosenStyled>
          {pokemonTeam.map((pokemon: PokemonWithDetails) => (
            <PokemonTeamMember key={`pokemon-team-${pokemon.id}`} pokemon={pokemon} />
          ))}
        </PokemonChosenStyled>
        
      }
    </TeamContainer>
  )
}

export { PokemonTeam }
