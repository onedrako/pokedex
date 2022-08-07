import React from 'react'
import { capitalizeFirstLetter } from '@utils/capitalize'
import { PokemonWithDetails } from '@customTypes/pokemonCustomTypes'
import { SendPokemonToOak } from '@styles/Home/PokemonTeam/PokemonTeamAnimation'

const SendPokemonOutOfTeam = ({pokemon}: {pokemon: PokemonWithDetails}) => {
  return ( 
    <SendPokemonToOak className='poke-gone'>
      <div className='pipe'></div>
      <img className='pokemon' src={pokemon.sprites.front_default} alt="pokemon" />
      <img className="pokeball" src="https://i.imgur.com/XzODe9l.png" alt="pokeball"/>
      <div className='laser'></div>
      <p className='message'>El profesor Oak cuidara bien de {capitalizeFirstLetter(pokemon.name)}</p>
    </SendPokemonToOak>
  )
}

export {SendPokemonOutOfTeam}