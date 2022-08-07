// Libraries
import React from 'react'
import { Routes, Route } from 'react-router-dom'

// Styles
import { GlobalStyles } from './styles/GlobalStyles'

// Pages
import Home from '@pages/Home'
import {PokemonDetailPage} from '@pages/PokemonDetailPage'

//Components
import {Layout} from '@components/Layout/Layout'

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/pokemon' element={<PokemonDetailPage/>} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
