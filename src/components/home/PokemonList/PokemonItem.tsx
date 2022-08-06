//Libraries
import React from 'react'
//Redux
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from 'index'
import { addPokemonToTeamOnList, removePokemonFromTeamOnList } from '@utils/reduxFuctions/addRemovePokemonTeamOnList'

//Utils
import { capitalizeFirstLetter } from '@utils/capitalize'

//Styles
import { PokemonItemContainer } from '@styles/Home/PokemonList/PokemonItem'

//Types
import { PokemonWithDetails, POKEMON_TYPE_NAME } from '@customTypes/pokemonCustomTypes'
import { IPokemonType } from 'pokeapi-typescript'
import { PokemonType } from './PokemonType'
import { addPokemonToTeam, removePokemonFromTeam } from '@utils/reduxFuctions/addRemovePokemonTeam'
import { setPokemonDetail } from '@redux/slices/pokemonDetailSlice'
import { setShowDetails, setTriggerPokedexAnimation } from '@redux/slices/uiSlice'


const PokemonItem = ({ pokemon }: {pokemon: PokemonWithDetails}) => {

  const pokemonList = useSelector((state: any) => state.pokemon.pokemon, shallowEqual)
  const pokemonTeam = useSelector((state: any) => state.pokemon.pokemonTeam, shallowEqual)
  const dispatch = useDispatch<AppDispatch>()

  const openPokemonDetail = () => {
    dispatch(setPokemonDetail(pokemon))
    dispatch(setShowDetails(true))
    dispatch(setTriggerPokedexAnimation(true))
  }

  return (
    <PokemonItemContainer onClick={() => openPokemonDetail()}>
      {!pokemon.team ? 
      (
        <img 
          className='pokemon-item__add-remove' 
          src="https://i.imgur.com/Qrm7Qrn.png" 
          alt="icon to add pokemon to team"
          onClick={(e) => {
            e.stopPropagation()
            addPokemonToTeamOnList(pokemon, pokemonList, dispatch)
            addPokemonToTeam(pokemon, pokemonTeam, dispatch)
            }
          }
          />
      )  :
      (
        <img 
        className='pokemon-item__add-remove' 
        src="https://i.imgur.com/LsQQ1EM.png" 
        alt="icon to remove pokemon to team"
        onClick={(e) => {
          e.stopPropagation()
          removePokemonFromTeamOnList( pokemon, pokemonList, dispatch )
          removePokemonFromTeam( pokemon, pokemonTeam, dispatch )
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
