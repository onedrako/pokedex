//Libraries
import React from 'react'
import { useNavigate } from 'react-router-dom'
//Redux
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from 'index'
import { setPokemonToEliminateFromTeam } from '@redux/slices/pokemonSlice'
import { setKindOfMessage, setShowMessage} from '@redux/slices/uiSlice'
import { addPokemonToTeamOnList } from '@utils/reduxFuctions/addRemovePokemonTeamOnList'
import { addPokemonToTeam } from '@utils/reduxFuctions/addRemovePokemonTeam'

//Utils
import { capitalizeFirstLetter } from '@utils/capitalize'
import { openPokemonDetail } from '@utils/componentsUtils/openClosePokemonDetails'

//Styles
import { PokemonItemContainer } from '@styles/Home/PokemonList/PokemonItem'

//Types
import { PokemonWithDetails, POKEMON_TYPE_NAME } from '@customTypes/pokemonCustomTypes'
import { IPokemonType } from 'pokeapi-typescript'
import { PokemonType } from './PokemonType'


const PokemonItem = ({ pokemon }: {pokemon: PokemonWithDetails}) => {
  const pokemonList = useSelector((state: any) => state.pokemon.pokemon, shallowEqual)
  const pokemonTeam = useSelector((state: any) => state.pokemon.pokemonTeam, shallowEqual)
  const dispatch = useDispatch<AppDispatch>()

  const navigate = useNavigate()

  return (
    <PokemonItemContainer onClick={() => openPokemonDetail({dispatch, navigate, pokemon, route: "/pokemon"})}>
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
          dispatch(setKindOfMessage("list"))
          dispatch(setPokemonToEliminateFromTeam(pokemon))
          dispatch(setShowMessage(true)) 
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
