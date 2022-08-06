import { PokemonWithDetails } from '@customTypes/pokemonCustomTypes'
import { ConfirmMessageStyled } from '@styles/Home/Events/ConfirmMessage'
import { NotificationFromBottom } from '@styles/Home/Events/NotificationContainer'
import React from 'react'
import { shallowEqual, useSelector } from 'react-redux'

const ConfirmMessage = () => {
  const pokemonTeam: PokemonWithDetails[] = useSelector((state: any) => state.pokemon.pokemonTeam, shallowEqual)
  return (
    <NotificationFromBottom> 
      <ConfirmMessageStyled>
        <div className='message'>
          <img className='message__icon-image' src="https://i.imgur.com/fTfcC3j.png" alt="profesor oak sprite" />
          <img className='message__pokemon-sprite' src={pokemonTeam[5].sprites.front_default } alt="" />
          <p className='message__text'>¿Estas seguro que quieres eliminar a asdadsdadw del equipo?</p>
        </div>
        <div className="buttons">
          <button type='button' className='button confirm'>Si</button>
          <button type='button' className='button cancel'>No</button>
        </div>
      </ConfirmMessageStyled>
    </NotificationFromBottom>
  )
}

export {ConfirmMessage}