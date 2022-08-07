//Libraries
import React from 'react'
import { useNavigate } from 'react-router-dom'
//Redux
import { useDispatch } from 'react-redux'
import { AppDispatch } from 'index'
import { setPokemonDetail } from '@redux/slices/pokemonDetailSlice'
import { setKindOfMessage, setShowDetails, setShowMessage, setTriggerPokedexAnimation } from '@redux/slices/uiSlice'

//Utils
import { capitalizeFirstLetter } from '@utils/capitalize'

//Styles
import { PokemonMember } from '@styles/Home/PokemonTeam/PokemonMember'

// Types
import { PokemonWithDetails } from '@customTypes/pokemonCustomTypes'
import { getGradientByType } from '@utils/getGradientByType'
import { setPokemonToEliminateFromTeam } from '@redux/slices/pokemonSlice'
import { openPokemonDetail } from '@utils/componentsUtils/openClosePokemonDetails'


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