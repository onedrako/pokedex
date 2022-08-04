//Libraries
import React from 'react'
//Redux
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from 'index'
import { addPokemonToTeam } from '@utils/reduxFuctions/addPokemonToTeam'

//Utils
import { capitalizeFirstLetter } from '@utils/capitalize'

//Styles
import { PokemonItemContainer } from '@styles/Home/PokemonList/PokemonItem'

//Types
import { PokemonWithDetails, POKEMON_TYPE_NAME } from '@customTypes/pokemonCustomTypes'
import { IPokemonType } from 'pokeapi-typescript'
import { PokemonType } from './PokemonType'


const PokemonItem = ({ pokemon }: {pokemon: PokemonWithDetails}) => {

  const pokemonList = useSelector((state: any) => state.pokemon.pokemon, shallowEqual)
  const dispatch = useDispatch<AppDispatch>()

  return (
    <PokemonItemContainer onClick={() => console.log("click-container")}>
      {!pokemon.team ? 
      (
        <img 
          className='pokemon-item__add-remove' 
          src="https://i.imgur.com/3C0Kzrn.png" 
          alt="icon-to-add/remove"
          onClick={(e) => {
            e.stopPropagation()
            addPokemonToTeam(pokemon, pokemonList, dispatch)
            }
          }
          />
      )  :
      (
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
      )
    }
      <img className='pokemon-item__sprite' src={pokemon.sprites.front_default} alt={`Imagen de ${pokemon.name}`} />
      <div className='pokemon-item__types'>
        {pokemon.types.map((type: IPokemonType ) => 
          <PokemonType key={`${pokemon.id}-${type.type.name}`} pokemonType={type.type.name as keyof typeof POKEMON_TYPE_NAME} />
        )}
      </div>
      <p className='pokemon-item__name'>{ capitalizeFirstLetter(pokemon.name)}</p>
  </PokemonItemContainer>
  )
}

export default PokemonItem
