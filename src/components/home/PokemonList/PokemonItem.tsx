import React from 'react'
import { IPokemon } from 'pokeapi-typescript'
import { PokemonItemContainer } from '@styles/Home/PokemonList/PokemonItem'
import { capitalizeFirstLetter } from '@utils/capitalize'
import { PokemonType } from './PokemonType'
import { IPokemonType } from 'pokeapi-typescript'
import { POKEMON_TYPE_NAME } from '@customTypes/pokemonCustomTypes'


const PokemonItem = ({ pokemon }: {pokemon: IPokemon}) => {
  return (
    <PokemonItemContainer onClick={() => console.log("click-container")}>
      <img 
        className='pokemon-item__add-remove' 
        src="https://i.imgur.com/3C0Kzrn.png" 
        alt="icon-to-add/remove"
        onClick={(e) => {
          e.stopPropagation()
          console.log("click-add")}
        }
          
        />
      <img className='pokemon-item__sprite' src={pokemon.sprites.front_default} alt={`Imagen de ${pokemon.name}`} />
      <p className='pokemon-item__name'>{ capitalizeFirstLetter(pokemon.name)}</p>
      <div className='pokemon-item__types'>
        {pokemon.types.map((type: IPokemonType ) => 
          <PokemonType key={`${pokemon.id}-${type.type.name}`} pokemonType={type.type.name as keyof typeof POKEMON_TYPE_NAME} />
        )}
      </div>
  </PokemonItemContainer>
  )
}

export default PokemonItem
