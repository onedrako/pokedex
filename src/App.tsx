// Libraries
import React from 'react'

// Styles
import { GlobalStyles } from './styles/GlobalStyles'

// Pages
import Home from '@pages/Home'
import { TopPokedex } from '@components/home/Pokedex/TopPokedex'
import { BotPokedex } from '@components/home/Pokedex/BotPokedex'

const App = () => {
  return (
    <>
      <GlobalStyles />
      <TopPokedex/>
      <Home/>
      <BotPokedex/>
    </>
  )
}

export default App
