//Libraries
import React, { ReactNode} from 'react'
import { useInView } from 'react-intersection-observer'
//Redux
import { useSelector } from 'react-redux'

//Components
import { Main } from '@styles/Home/Home'
import { PokemonTeam } from '@components/home/pokemonTeam/PokemonTeam'
import { Notification } from '@components/Events/Notification'
import { BotPokedex } from '@components/Layout/Pokedex/BotPokedex'
import { TopPokedex } from '@components/Layout/Pokedex/TopPokedex'
import { PokemonTeamMiniBar } from './PokemonTeamMiniBar/PokemonTeamMiniBar'

//Events
import { NotificationContainer } from '@styles/Events/NotificationContainer'
import { ConfirmMessage } from '@components/Events/ConfirmMessage'

const Layout = ({children}: {children: ReactNode}) => {
  const MaxPokemonError: boolean = useSelector((state: any) => state.uiError.maxPokemonError)
  const showMessage = useSelector((state: any) => state.ui.showMessage)

  const { ref, inView } = useInView({
    threshold: 0.3
  })

  return (
    <>
      <TopPokedex/>
      <Main>
        <div style={{marginTop: "100px", width:"100%", height:"1px"}}></div>
        <PokemonTeam isOnView={ref}/>
        {children}

        {/* Events */}
        {/* { MaxPokemonError && 
          <NotificationContainer>
            <Notification/>   
          </NotificationContainer>
        } */}
          <NotificationContainer>
            <Notification/>   
          </NotificationContainer>
        {showMessage && <ConfirmMessage/>}
        {!inView && <PokemonTeamMiniBar/>}
      </Main>
      <BotPokedex/>
      </>
  )
}

export {Layout}