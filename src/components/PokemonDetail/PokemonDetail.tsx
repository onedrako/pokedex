// Libraries
import React from 'react'
import { useNavigate } from 'react-router-dom'
//Redux
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { setPokemonToEliminateFromTeam } from '@redux/slices/pokemonSlice'
import { setKindOfMessage, setReloadPokedexAnimation, setShowDetails, setShowMessage, setTriggerPokedexAnimation } from '@redux/slices/uiSlice'
import { updateTeamStateOnDetail } from '@utils/reduxFuctions/updateTeamStateOnDetail'
//Redux Utils
import { addPokemonToTeamOnList } from '@utils/reduxFuctions/addRemovePokemonTeamOnList'
import { addPokemonToTeam } from '@utils/reduxFuctions/addRemovePokemonTeam'

//Utils
import { capitalizeFirstLetter } from '@utils/capitalize'
import { getGradientByType } from '@utils/getGradientByType'
import { getStatName } from '@utils/getStatName'
import { closePokemonDetail } from '@utils/componentsUtils/openClosePokemonDetails'

//Styles
import { PokemonDetailContainer, PokemonDetailHeader } from '@styles/PokemonDetail/PokemonDetail'

//Types TS
import { IPokemonStat, IPokemonType } from 'pokeapi-typescript'
import { PokemonType } from '../home/PokemonList/PokemonType'
import { PokemonWithDetails, POKEMON_TYPE_NAME } from '@customTypes/pokemonCustomTypes'
import { PokemonBuble } from './PokemonBuble'



const PokemonDetail = () => {
  const pokemonSelected: PokemonWithDetails = useSelector((state: any) => state.pokemonDetail.pokemon, shallowEqual)
  const pokemonTeam: PokemonWithDetails[] = useSelector((state: any) => state.pokemon.pokemonTeam, shallowEqual)
  const pokemonList: PokemonWithDetails[] = useSelector((state: any) => state.pokemon.pokemon, shallowEqual)
  const showDetails: boolean = useSelector((state: any) => state.ui.showDetails)
  const reloadPokedexAnimation = useSelector((state: any) => state.ui.reloadPokedexAnimation)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  if (!pokemonSelected.id) {
    return (
      <PokemonDetailContainer>

        <h1>Pokemon Detail</h1>
        <img className='pokemon-details__back' src="https://i.imgur.com/06KKIXc.png" alt="Go back icon"
          onClick={() => {
            dispatch(setReloadPokedexAnimation(true))
            closePokemonDetail({ dispatch, navigate, route: "/", reload: reloadPokedexAnimation })
          }}
        />

      </PokemonDetailContainer>
    )
  }

  const gradient = getGradientByType(pokemonSelected.types)

  return (
    <PokemonDetailContainer>
      <PokemonDetailHeader className='pokemon-details__types-view' gradient={gradient} ></PokemonDetailHeader>

      <figure className='pokemon-details__image-container'>
        <img className='pokemon-details__image' src={pokemonSelected.sprites.front_default} alt={`${pokemonSelected.name} image`} />
      </figure>

      <div className='pokemon-details'>
        <h2 className='pokemon-details__name'>{`#${pokemonSelected.id} ${capitalizeFirstLetter(pokemonSelected.name)}`}</h2>
        <div className='pokemon-item__types'>
          {pokemonSelected.types.map((type: IPokemonType) => (
            <PokemonType key={`pokemon-detail-${type.type.name}`} pokemonType={type.type.name as keyof typeof POKEMON_TYPE_NAME} />
          ))}
        </div>

        <p className='pokemon-details__height'>{`Altura: ${pokemonSelected.height / 10} m`} </p>

        <div className='pokemon-details__stats'>
          {pokemonSelected.stats.map((stat: IPokemonStat) => (
            <div className='pokemon-details__stats--container' key={`pokemon-detail-${stat.stat.name}`}>
              <p className='pokemon-details__stats--name'>{getStatName(stat)}</p>
              <p className='pokemon-details__stats--value'>{stat.base_stat} </p>
            </div>
          ))}
        </div>

      </div>



      <img className='pokemon-details__back' src="https://i.imgur.com/06KKIXc.png" alt="Go back icon"
        onClick={() => {
          dispatch(setReloadPokedexAnimation(true))
          closePokemonDetail({ dispatch, navigate, route: "/", reload: reloadPokedexAnimation })
        }}
      />

      {!pokemonSelected.team ?
        (
          <img
            className='pokemon-item__add-remove'
            src="https://i.imgur.com/Qrm7Qrn.png"
            alt="icon to add pokemon to team"
            onClick={(e) => {
              e.stopPropagation()
              addPokemonToTeamOnList(pokemonSelected, pokemonList, dispatch)
              addPokemonToTeam(pokemonSelected, pokemonTeam, dispatch)
              updateTeamStateOnDetail(pokemonSelected, showDetails, dispatch, pokemonTeam.length)
            }
            }
          />
        ) :
        (
          <img
            className='pokemon-item__add-remove'
            src="https://i.imgur.com/LsQQ1EM.png"
            alt="icon to remove pokemon to team"
            onClick={(e) => {
              e.stopPropagation()
              dispatch(setKindOfMessage("detail"))
              dispatch(setPokemonToEliminateFromTeam(pokemonSelected))
              dispatch(setShowMessage(true))
            }
            }
          />
        )
      }

      <PokemonBuble />
    </PokemonDetailContainer>
  )
}

export { PokemonDetail }