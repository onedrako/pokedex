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
// import { PokemonWithDetails } from '@customTypes/pokemonCustomTypes'

const Layout = ({children}: {children: ReactNode}) => {
  const MaxPokemonError: boolean = useSelector((state: any) => state.uiError.maxPokemonError)
  // const pokemonToEliminateFromTeam: PokemonWithDetails = useSelector((state: any) => state.pokemon.pokemonToEliminateFromTeam)
  const showMessage = useSelector((state: any) => state.ui.showMessage)
  return (
    <>
    <TopPokedex/>
    <Main>
      { MaxPokemonError && 
          <NotificationContainer>
            <Notification/>   
          </NotificationContainer>
      }
      {showMessage && <ConfirmMessage/>}
      <PokemonTeam />
      {children}
    </Main>
    <BotPokedex/>
    </>
  )
}

export {Layout}