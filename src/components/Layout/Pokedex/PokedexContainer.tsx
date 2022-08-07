import React from 'react'
import { BotPokedex } from './BotPokedex'
import { TopPokedex } from './TopPokedex'

const PokedexContainer = ({children}: {children: React.ReactNode}) => {
  return (
    <>
        <TopPokedex/>
          {children}
        <BotPokedex/>
    </>
  )
}

export {PokedexContainer}