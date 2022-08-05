//Libraries
import React from 'react'
//Redux
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from 'index'
import { removePokemonFromTeamOnList } from '@utils/reduxFuctions/addRemovePokemonTeamOnList'
import { setPokemonDetail } from '@redux/slices/pokemonDetailSlice'
import { setShowDetails } from '@redux/slices/uiSlice'

//Utils
import { capitalizeFirstLetter } from '@utils/capitalize'

//Styles
import { PokemonMember } from '@styles/Home/PokemonTeam/PokemonMember'

// Types
import { PokemonWithDetails } from '@customTypes/pokemonCustomTypes'
import { removePokemonFromTeam } from '@utils/reduxFuctions/addRemovePokemonTeam'
import { getGradientByType } from '@utils/getGradientByType'
import { updateTeamStateOnDetail } from '@utils/reduxFuctions/updateTeamStateOnDetail'


const PokemonTeamMember = ({pokemon}: {pokemon: PokemonWithDetails}) => {
  const gradient = getGradientByType(pokemon.types)

  const pokemonList = useSelector((state: any) => state.pokemon.pokemon, shallowEqual)
  const pokemonTeam = useSelector((state: any) => state.pokemon.pokemonTeam, shallowEqual)
  const showDetails = useSelector((state: any) => state.ui.showDetails)

  const dispatch = useDispatch<AppDispatch>()

  const openPokemonDetail = () => {
    dispatch(setPokemonDetail(pokemon))
    dispatch(setShowDetails(true))
  }


  return (
    <PokemonMember gradient={gradient} onClick={() => openPokemonDetail()}>
        <img 
          className='pokemon-item__add-remove' 
          src="https://i.imgur.com/LsQQ1EM.png" 
          alt="icon-to-add/remove"
          onClick={(e) => {
            e.stopPropagation()
            removePokemonFromTeamOnList( pokemon, pokemonList, dispatch )
            removePokemonFromTeam( pokemon, pokemonTeam, dispatch )
            updateTeamStateOnDetail(pokemon, showDetails, dispatch )
            }
          }
        />
      <img className='pokemon-member__image' src={pokemon.sprites.front_default} alt={`${pokemon.name} image`} />
      <p className='pokemon-member__name'>{capitalizeFirstLetter(pokemon.name)}</p>
    </PokemonMember>
  )
}

export {PokemonTeamMember}