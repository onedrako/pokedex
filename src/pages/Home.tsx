import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Main } from '@styles/Home/Home.js'
import { PokedexImageTop, PokedexImagebot } from '@styles/Home/PokedexImages/PokedexImages'
import { PokemonTeam } from '@components/home/pokemonTeam/PokemonTeam'
import { SearchBar } from '@components/home/SearchBar/SearchBar'
import { PokemonList } from '@components/home/PokemonList/PokemonList'
import { AppDispatch } from 'index'
import { fetchPokemonsWithDetails, setPaginationOffset } from '@redux/slices/pokemonSlice'
import { useInView } from 'react-intersection-observer'



const Home = () => {
  const paginationOffset = useSelector((state: any) => state.pokemon.paginationOffset)
  const dispatch = useDispatch<AppDispatch>()
  const { ref, inView } = useInView({
    threshold: 0.50
  })

  useEffect(() => {
    dispatch(fetchPokemonsWithDetails(`/pokemon?limit=10&offset=${paginationOffset}`) as any) // TODO
    dispatch(setPaginationOffset(paginationOffset + 10))
  }
  , [inView])

  return (
    <Main>
      <PokedexImageTop src="https://i.imgur.com/JkWQOWK.png" alt="" />
      <PokemonTeam/>
      <SearchBar/>
      <PokemonList />
      <div ref={ref} ></div>
      <PokedexImagebot src="https://i.imgur.com/cWjlyxp.png" alt="" />
    </Main>
  )
}

export default Home
