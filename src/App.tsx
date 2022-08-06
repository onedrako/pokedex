// Libraries
import React from 'react'
import { Routes, Route } from 'react-router-dom'

// Styles
import { GlobalStyles } from './styles/GlobalStyles'

// Pages
import Home from '@pages/Home'

//Components
import {Layout} from '@components/Layout/Layout'
import {PokemonDetailPage} from '@pages/PokemonDetailPage'

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
