//Libraries
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
//Redux
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchPokemonsWithDetails, setPaginationOffset } from '@redux/slices/pokemonSlice'
import { AppDispatch } from 'index'

// Components
import { PokemonTeam } from '@components/home/pokemonTeam/PokemonTeam'
import { SearchBar } from '@components/home/SearchBar/SearchBar'
import { PokemonList } from '@components/home/PokemonList/PokemonList'

// Styles
import { PokedexImageTop, PokedexImagebot } from '@styles/Home/PokedexImages/PokedexImages'
import { Main } from '@styles/Home/Home.js'

//Utils
import { limitOfPokemonToAPIRequest, pokemonListLimit } from '@utils/constants/constants'


const Home = () => {
  const paginationOffset = useSelector((state: any) => state.pokemon.paginationOffset)
  const pokemonList = useSelector((state: any) => state.pokemon.pokemon, shallowEqual)
  const dispatch = useDispatch<AppDispatch>()
  const { ref, inView } = useInView({
    threshold: 0.50
  })


  useEffect(() => {
    //This is in case the user scroll and reach the limit of the list that we stablish
    if(pokemonList.length === pokemonListLimit) {
      return
    }
    //This is in case the user scroll but there are elements to charge when pokemon number is more than the limit per page
    if((pokemonListLimit - pokemonList.length) > limitOfPokemonToAPIRequest){
      dispatch(fetchPokemonsWithDetails(`/pokemon?limit=${limitOfPokemonToAPIRequest}&offset=${paginationOffset}`) as any) //TODO: fix type
      dispatch(setPaginationOffset(paginationOffset + 10))
      return
    }

    //This is in case the user scroll and there are elements to charge when pokemon number is less than the limit per page
    const newLimit =  (pokemonListLimit - pokemonList.length) % limitOfPokemonToAPIRequest
    dispatch(fetchPokemonsWithDetails(`/pokemon?limit=${newLimit}&offset=${paginationOffset}`) as any) //TODO: fix type
    dispatch(setPaginationOffset(paginationOffset + newLimit))

}, [inView])

  return (
    <Main>
      <PokedexImageTop src="https://i.imgur.com/JkWQOWK.png" alt="" />
        <PokemonTeam/>
        <SearchBar/>
        <PokemonList />
        {pokemonList.length !== pokemonListLimit && <div ref={ref} ></div>}
      <PokedexImagebot src="https://i.imgur.com/cWjlyxp.png" alt="" />
    </Main>
  )
}

export default Home
