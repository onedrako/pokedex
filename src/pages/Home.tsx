import React from 'react'
import { useSelector } from 'react-redux'

import { Main } from '@styles/Home/Home.js'
import { PokedexImageTop, PokedexImagebot } from '@styles/Home/PokedexImages/PokedexImages'
import { PokemonTeam } from '@components/home/pokemonTeam/PokemonTeam'
import { SearchBar } from '@components/home/SearchBar/SearchBar'
import { PokemonList } from '@components/home/PokemonList/PokemonList'

const Home = () => {
  return (
    <Main>
      <PokedexImageTop src="https://i.imgur.com/JkWQOWK.png" alt="" />
      <PokemonTeam/>
      <SearchBar/>
      <PokemonList />
      <PokedexImagebot src="https://i.imgur.com/cWjlyxp.png" alt="" />
    </Main>
  )
}

export default Home
