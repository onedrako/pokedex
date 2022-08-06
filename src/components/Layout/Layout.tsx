import { Notification } from '@components/Events/Notification'
import { BotPokedex } from '@components/home/Pokedex/BotPokedex'
import { TopPokedex } from '@components/home/Pokedex/TopPokedex'
import { Main } from '@styles/Home/Home'
import { NotificationContainer } from '@styles/Home/Pokedex/NotificationContainer'
import React, { ReactNode } from 'react'
import { useSelector } from 'react-redux'

const Layout = ({children}: {children: ReactNode}) => {
  const MaxPokemonError: boolean = useSelector((state: any) => state.uiError.maxPokemonError)
  return (
    <>
    <TopPokedex/>
    <Main>
      { MaxPokemonError && 
          <NotificationContainer>
            <Notification/>   
          </NotificationContainer>
      }
      {children}
    </Main>
    <BotPokedex/>
    </>
  )
}

export {Layout}