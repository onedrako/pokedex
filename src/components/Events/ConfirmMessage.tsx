//Libraries
import React from 'react'
//Redux
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

//Utils
import { cancelEliminatePokemonFromTeam, confirmEliminatePokemonFromTeam } from '@utils/componentsUtils/EliminatePokemonFromTeam'
import { capitalizeFirstLetter } from '@utils/capitalize'

//Styles
import { ConfirmMessageStyled } from '@styles/Events/ConfirmMessage'
import { NotificationFromBottom } from '@styles/Events/NotificationContainer'

//Types
import { PokemonWithDetails } from '@customTypes/pokemonCustomTypes'

const ConfirmMessage = () => {
  const pokemon: PokemonWithDetails = useSelector((state: any) => state.pokemon.pokemonToEliminateFromTeam, shallowEqual)
  const pokemonTeam = useSelector((state: any) => state.pokemon.pokemonTeam, shallowEqual)
  const pokemonList = useSelector((state: any) => state.pokemon.pokemon, shallowEqual)
  const showDetails = useSelector((state: any) => state.ui.showDetails)
  const kindOfMessage = useSelector((state: any) => state.ui.kindOfMessage)

  const triggerMessageAnimation = useSelector((state: any) => state.ui.triggerMessageAnimation)

  const dispatch = useDispatch()

  return (
    <NotificationFromBottom animation={triggerMessageAnimation}> 
      <ConfirmMessageStyled>
        <div className='message'>
          <img className='message__icon-image' src="https://i.imgur.com/fTfcC3j.png" alt="profesor oak sprite" />
          <img className='message__pokemon-sprite' src={pokemon.sprites.front_default } alt={`${pokemon.name} image`} />
          <p className='message__text'>¿Quieres enviar a {capitalizeFirstLetter(pokemon.name)} con el profesor Oak?</p>
        </div>
        <div className="buttons">
          <button type='button' className='button confirm' onClick={() => confirmEliminatePokemonFromTeam({pokemon, pokemonList, pokemonTeam, showDetails, dispatch, kindOfMessage}) } >Si</button>
          <button type='button' className='button cancel' onClick={() => cancelEliminatePokemonFromTeam(dispatch)} >No</button>
        </div>
      </ConfirmMessageStyled>
    </NotificationFromBottom>
  )
}

export {ConfirmMessage}