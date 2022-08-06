import { NotificationStyled } from '@styles/Home/Events/Notification'
import React from 'react'

const Notification = () => {
  return (
    <NotificationStyled>
      <div className="platform__container">
        <div className="platform__container--logo">
          <img className="logo--option2" src="https://i.imgur.com/j6IaTHu.png" alt=""/>
        </div>
      </div>
      <div className="banner">
        <div className="banner__info">
          <div className="banner__info--info-description">
              <h2>¡No puede ser! ha ocurrido un error</h2>
          </div>
          <div className="banner__info--name-description">
              <h3>Tu equipo está lleno, para agregar un nuevo Pokémon debes liberar alguno antes</h3>
          </div>
        </div>
      </div>
    </NotificationStyled>
  )
}

export {Notification}