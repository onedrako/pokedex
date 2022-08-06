//Libraries
import React from 'react'
//Redux
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

//Utils
import { eliminatePokemonFromTeam } from '@utils/componentsUtils/EliminatePokemonFromTeam'

//Styles
import { ConfirmMessageStyled } from '@styles/Home/Events/ConfirmMessage'
import { NotificationFromBottom } from '@styles/Home/Events/NotificationContainer'

//Types
import { PokemonWithDetails } from '@customTypes/pokemonCustomTypes'

const ConfirmMessage = () => {
  const pokemon: PokemonWithDetails = useSelector((state: any) => state.pokemon.pokemonToEliminateFromTeam, shallowEqual)
  const pokemonTeam = useSelector((state: any) => state.pokemon.pokemonTeam, shallowEqual)
  const pokemonList = useSelector((state: any) => state.pokemon.pokemon, shallowEqual)
  const showDetails = useSelector((state: any) => state.ui.showDetails)

  const triggerMessageAnimation = useSelector((state: any) => state.ui.triggerMessageAnimation)

  const dispatch = useDispatch()

  return (
    <NotificationFromBottom animation={triggerMessageAnimation}> 
      <ConfirmMessageStyled>
        <div className='message'>
          <img className='message__icon-image' src="https://i.imgur.com/fTfcC3j.png" alt="profesor oak sprite" />
          <img className='message__pokemon-sprite' src={pokemon.sprites.front_default } alt={`${pokemon.name} image`} />
          <p className='message__text'>¿Estas seguro que quieres eliminar a {pokemon.name} del equipo?</p>
        </div>
        <div className="buttons">
          <button type='button' className='button confirm' onClick={() => eliminatePokemonFromTeam({pokemon, pokemonList, pokemonTeam, showDetails, dispatch}) } >Si</button>
          <button type='button' className='button cancel'>No</button>
        </div>
      </ConfirmMessageStyled>
    </NotificationFromBottom>
  )
}

export {ConfirmMessage}