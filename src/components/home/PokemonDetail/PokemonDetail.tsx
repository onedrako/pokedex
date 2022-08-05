// Libraries
import React from 'react'
//Redux
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

//Utils
import { capitalizeFirstLetter } from '@utils/capitalize'
import { getGradientByType } from '@utils/getGradientByType'
import { getStatName } from '@utils/getStatName'

//Styles
import { PokemonDetailContainer, PokemonDetailHeader } from '@styles/Home/PokemonDetail/PokemonDetail'

//Types TS
import { IPokemonStat, IPokemonType } from 'pokeapi-typescript'
import { PokemonType } from '../PokemonList/PokemonType'
import { PokemonWithDetails, POKEMON_TYPE_NAME, POKEMON_STATS } from '@customTypes/pokemonCustomTypes'
import { addPokemonToTeamOnList, removePokemonFromTeamOnList } from '@utils/reduxFuctions/addRemovePokemonTeamOnList'
import { addPokemonToTeam, removePokemonFromTeam } from '@utils/reduxFuctions/addRemovePokemonTeam'
import { setPokemonDetail } from '@redux/slices/pokemonDetailSlice'
import { setShowDetails } from '@redux/slices/uiSlice'



const PokemonDetail = () => {
  const pokemonSelected: PokemonWithDetails = useSelector((state: any) => state.pokemonDetail.pokemon, shallowEqual)
  const pokemonTeam = useSelector((state: any) => state.pokemon.pokemonTeam, shallowEqual)
  const pokemonList = useSelector((state: any) => state.pokemon.pokemon, shallowEqual)
  const dispatch = useDispatch()


  const gradient = getGradientByType(pokemonSelected.types)
  return (
    <PokemonDetailContainer>
      <PokemonDetailHeader className='pokemon-details__types-view' gradient={gradient} ></PokemonDetailHeader>
      
      <div className='pokemon-details'>
        <h2 className='pokemon-details__name'>{`#${pokemonSelected.order} ${capitalizeFirstLetter(pokemonSelected.name)}` }</h2>
        
        <div className='pokemon-item__types'>
          {pokemonSelected.types.map((type: IPokemonType) => (
            <PokemonType key={`pokemon-detail-${type.type.name}`} pokemonType={type.type.name as keyof typeof POKEMON_TYPE_NAME} />
          ))}
        </div>
        
        <p className='pokemon-details__height'>{`Altura: ${pokemonSelected.height/10} m`} </p>
        
        <div className='pokemon-details__stats'>
          {pokemonSelected.stats.map((stat: IPokemonStat ) => (
            <div className='pokemon-details__stats--container' key={`pokemon-detail-${stat.stat.name}`}>
              <p className='pokemon-details__stats--name'>{getStatName(stat)}</p>
              <p className='pokemon-details__stats--value'>{stat.base_stat} </p>
            </div>
          ))}
        </div>

      </div>

      <img className='pokemon-details__image' src={pokemonSelected.sprites.front_default} alt={`${pokemonSelected.name} image`} />
      <img className='pokemon-details__back' src="https://cdn-icons-png.flaticon.com/512/860/860790.png" alt={`Go back icon`} onClick={() => dispatch(setShowDetails(false))} />
      
      {!pokemonSelected.team ? 
      (
        <img 
          className='pokemon-item__add-remove' 
          src="https://i.imgur.com/3C0Kzrn.png" 
          alt="icon to add pokemon to team"
          onClick={(e) => {
            e.stopPropagation()
            addPokemonToTeamOnList(pokemonSelected, pokemonList, dispatch)
            addPokemonToTeam(pokemonSelected, pokemonTeam, dispatch)
            dispatch(setShowDetails(false))
            }
          }
          />
      )  :
      (
        <img 
        className='pokemon-item__add-remove' 
        src="https://i.imgur.com/Bd6iXm8.png" 
        alt="icon to remove pokemon to team"
        onClick={(e) => {
          e.stopPropagation()
          removePokemonFromTeamOnList( pokemonSelected, pokemonList, dispatch )
          removePokemonFromTeam( pokemonSelected, pokemonTeam, dispatch )
          dispatch(setShowDetails(false))
          }
        }
        />
      )
    }
    </PokemonDetailContainer>
  )
}

export {PokemonDetail}