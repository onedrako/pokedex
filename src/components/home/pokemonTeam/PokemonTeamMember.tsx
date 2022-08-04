import { Pokemon, PokemonWithDetails } from '@customTypes/pokemonCustomTypes'
import { PokemonMember } from '@styles/Home/PokemonTeam/PokemonMember'
import { capitalizeFirstLetter } from '@utils/capitalize'
import React from 'react'
import { POKEMON_TYPE_COLOR } from '@customTypes/pokemonCustomTypes'
import { removePokemonFromTeam } from '@utils/reduxFuctions/addRemovePokemonToTeam'
import { AppDispatch } from 'index'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'


const PokemonTeamMember = ({pokemon}: {pokemon: PokemonWithDetails}) => {
  const type1 = pokemon.types[0].type.name as keyof typeof POKEMON_TYPE_COLOR
  const type2 = pokemon.types[1] 
    ? pokemon.types[1].type.name as keyof typeof POKEMON_TYPE_COLOR 
    : pokemon.types[0].type.name as keyof typeof POKEMON_TYPE_COLOR

  const gradient = `linear-gradient(80deg,${POKEMON_TYPE_COLOR[type1]} 0%,${POKEMON_TYPE_COLOR[type2]} 100%)`

  const pokemonList = useSelector((state: any) => state.pokemon.pokemon, shallowEqual)
  const dispatch = useDispatch<AppDispatch>()

  return (
    <PokemonMember gradient={gradient}  >
        <img 
          className='pokemon-item__add-remove' 
          src="https://i.imgur.com/Bd6iXm8.png" 
          alt="icon-to-add/remove"
          onClick={(e) => {
            e.stopPropagation()
            removePokemonFromTeam( pokemon, pokemonList, dispatch )
            }
          }
        />
      <img className='pokemon-member__image' src={pokemon.sprites.front_default} alt={`${pokemon.name} image`} />
      <p className='pokemon-member__name'>{capitalizeFirstLetter(pokemon.name)}</p>
    </PokemonMember>
  )
}

export {PokemonTeamMember}