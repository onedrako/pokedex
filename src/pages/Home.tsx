import React from 'react'
import { Main } from '@styles/Home/Home.js'
import { PokedexImageTop, PokedexImagebot } from '@styles/Home/PokedexImages/PokedexImages'
import { PokemonTeam } from '@components/home/PokemonTeam'

const Home = () => {
  return (
    <Main>
      {/* <h1>Home</h1> */}
      <PokemonTeam/>
      <PokedexImageTop src="https://i.imgur.com/JkWQOWK.png" alt="" />
      <PokedexImagebot src="https://i.imgur.com/cWjlyxp.png" alt="" />
    </Main>
  )
}

export default Home
