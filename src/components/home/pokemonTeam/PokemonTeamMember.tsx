//Libraries
import React from 'react'
import { useNavigate } from 'react-router-dom'
//Redux
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from 'index'
import { setKindOfMessage, setReloadPokedexAnimation, setShowMessage } from '@redux/slices/uiSlice'
import { setPokemonToEliminateFromTeam } from '@redux/slices/pokemonSlice'

//Utils
import { capitalizeFirstLetter } from '@utils/capitalize'
import { getGradientByType } from '@utils/getGradientByType'
import { openPokemonDetail } from '@utils/componentsUtils/openClosePokemonDetails'

//Styles
import { PokemonMember } from '@styles/Home/PokemonTeam/PokemonMember'

//Types TS
import { PokemonWithDetails } from '@customTypes/pokemonCustomTypes'


const PokemonTeamMember = ({pokemon}: {pokemon: PokemonWithDetails}) => {
  const gradient = getGradientByType(pokemon.types)
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()
  const reloadPokedexAnimation = useSelector((state: any) => state.ui.reloadPokedexAnimation)
  
  return (
    <PokemonMember gradient={gradient} onClick={() => {
      dispatch(setReloadPokedexAnimation(true))  
      openPokemonDetail({dispatch, navigate, pokemon, route: "/pokemon", reload: reloadPokedexAnimation})}
    }>
      <img 
        className='pokemon-item__add-remove' 
        src="https://i.imgur.com/LsQQ1EM.png" 
        alt="icon-to-add/remove"
        onClick={(e) => {
          e.stopPropagation()
          dispatch(setKindOfMessage("team"))
          dispatch(setPokemonToEliminateFromTeam(pokemon))
          dispatch(setShowMessage(true))
          }
        }
      />
      <img className='pokemon-member__image' src={pokemon.sprites.front_default} alt={`${pokemon.name} image`} />
      <div className='pokemon-member__hp'>
        <p className='pokemon-member__hp--name'>HP</p>
        <p className='pokemon-member__hp--stat'>{pokemon.stats[0].base_stat}</p>
      </div>
      <p className='pokemon-member__name'>{capitalizeFirstLetter(pokemon.name)}</p>

      <img className='pokeball-animated' src="https://i.imgur.com/XzODe9l.png" alt="pokeball image" />
    </PokemonMember>
  )
}

export {PokemonTeamMember}