import { Pokemon, PokemonWithDetails } from '@customTypes/pokemonCustomTypes'
import { PokemonMember } from '@styles/Home/PokemonTeam/PokemonMember'
import { capitalizeFirstLetter } from '@utils/capitalize'
import React from 'react'
import { POKEMON_TYPE_COLOR } from '@customTypes/pokemonCustomTypes'


const PokemonTeamMember = ({pokemon}: {pokemon: PokemonWithDetails}) => {
  const type1 = pokemon.types[0].type.name as keyof typeof POKEMON_TYPE_COLOR
  const type2 = pokemon.types[1] 
    ? pokemon.types[1].type.name as keyof typeof POKEMON_TYPE_COLOR 
    : pokemon.types[0].type.name as keyof typeof POKEMON_TYPE_COLOR

  // const gradient = `linear-gradient(93dg,${POKEMON_TYPE_COLOR[type1]} 0%,${POKEMON_TYPE_COLOR[type2]} 100%)`
  const gradient = `linear-gradient(80deg,${POKEMON_TYPE_COLOR[type1]} 0%,${POKEMON_TYPE_COLOR[type2]} 100%)`
  console.log(gradient)

  return (
    <PokemonMember gradient={gradient}  >
        <img 
          className='pokemon-item__add-remove' 
          src="https://i.imgur.com/Bd6iXm8.png" 
          alt="icon-to-add/remove"
          onClick={(e) => {
            e.stopPropagation()
            console.log("remove")
            }
          }
        />
      <img className='pokemon-member__image' src={pokemon.sprites.front_default} alt={`${pokemon.name} image`} />
      <p className='pokemon-member__name'>{capitalizeFirstLetter(pokemon.name)}</p>
    </PokemonMember>
  )
}

export {PokemonTeamMember}