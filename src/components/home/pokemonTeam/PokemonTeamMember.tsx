//Libraries
import React from 'react'
//Redux
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from 'index'
import { removePokemonFromTeamOnList } from '@utils/reduxFuctions/addRemovePokemonTeamOnList'

//Utils
import { capitalizeFirstLetter } from '@utils/capitalize'

//Styles
import { PokemonMember } from '@styles/Home/PokemonTeam/PokemonMember'

// Types
import { PokemonWithDetails } from '@customTypes/pokemonCustomTypes'
import { POKEMON_TYPE_COLOR } from '@customTypes/pokemonCustomTypes'
import { removePokemonFromTeam } from '@utils/reduxFuctions/addRemovePokemonTeam'
import { getGradientByType } from '@utils/getGradientByType'


const PokemonTeamMember = ({pokemon}: {pokemon: PokemonWithDetails}) => {
  const gradient = getGradientByType(pokemon.types)

  const pokemonList = useSelector((state: any) => state.pokemon.pokemon, shallowEqual)
  const pokemonTeam = useSelector((state: any) => state.pokemon.pokemonTeam, shallowEqual)
  const dispatch = useDispatch<AppDispatch>()


  return (
    <PokemonMember gradient={gradient} onClick={() => console.log("click-container")}>
        <img 
          className='pokemon-item__add-remove' 
          src="https://i.imgur.com/Bd6iXm8.png" 
          alt="icon-to-add/remove"
          onClick={(e) => {
            e.stopPropagation()
            removePokemonFromTeamOnList( pokemon, pokemonList, dispatch )
            removePokemonFromTeam( pokemon, pokemonTeam, dispatch )
            }
          }
        />
      <img className='pokemon-member__image' src={pokemon.sprites.front_default} alt={`${pokemon.name} image`} />
      <p className='pokemon-member__name'>{capitalizeFirstLetter(pokemon.name)}</p>
    </PokemonMember>
  )
}

export {PokemonTeamMember}