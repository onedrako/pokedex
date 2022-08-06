//Libraries
import React, { ReactNode } from 'react'
//Redux
import { useSelector } from 'react-redux'

//Components
import { Main } from '@styles/Home/Home'
import { PokemonTeam } from '@components/home/pokemonTeam/PokemonTeam'
import { Notification } from '@components/Events/Notification'
import { BotPokedex } from '@components/home/Pokedex/BotPokedex'
import { TopPokedex } from '@components/home/Pokedex/TopPokedex'
//Messages
import { NotificationContainer } from '@styles/Home/Events/NotificationContainer'
import { ConfirmMessage } from '@components/Events/ConfirmMessage'

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
      <ConfirmMessage/>
      <PokemonTeam />
      {children}
    </Main>
    <BotPokedex/>
    </>
  )
}

export {Layout}