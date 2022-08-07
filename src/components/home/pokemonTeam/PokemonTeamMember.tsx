//Libraries
import React from 'react'
import { useNavigate } from 'react-router-dom'
//Redux
import { useDispatch } from 'react-redux'
import { AppDispatch } from 'index'
import { setKindOfMessage, setShowMessage } from '@redux/slices/uiSlice'
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

  return (
    <PokemonMember gradient={gradient} onClick={() => openPokemonDetail({dispatch, navigate, pokemon, route: "/pokemon"})}>
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
      <p className='pokemon-member__name'>{capitalizeFirstLetter(pokemon.name)}</p>
    </PokemonMember>
  )
}

export {PokemonTeamMember}