//Libraries
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
//Redux
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchPokemonsWithDetails, setPaginationOffset } from '@redux/slices/pokemonSlice'
import { AppDispatch } from 'index'

// Components
import { SearchBar } from '@components/home/SearchBar/SearchBar'
import { PokemonList } from '@components/home/PokemonList/PokemonList'

//Utils
import { limitOfPokemonToAPIRequest, pokemonListLimit } from '@utils/constants/constants'

//Types TS
import { PokemonWithDetails } from '@customTypes/pokemonCustomTypes'

const Home = () => {
  const paginationOffset: number = useSelector((state: any) => state.pokemon.paginationOffset)
  const pokemonList: PokemonWithDetails[] = useSelector((state: any) => state.pokemon.pokemon, shallowEqual)

  const dispatch = useDispatch<AppDispatch>()

  //Intersection Observer
  const { ref, inView } = useInView({
    threshold: 1
  })


  useEffect(() => {
    //This is in case the user scroll and reach the limit of the list that we stablish
    if(pokemonList.length >= pokemonListLimit) {
      return
    }
    //This is in case the user scroll but there are elements to charge when pokemon number is more than the limit per page
    if((pokemonListLimit - pokemonList.length) > limitOfPokemonToAPIRequest){
      dispatch(fetchPokemonsWithDetails(`/pokemon?limit=${limitOfPokemonToAPIRequest}&offset=${paginationOffset}`) as any) //TODO: fix type
      dispatch(setPaginationOffset(paginationOffset + limitOfPokemonToAPIRequest))
      return
    }

    //This is in case the user scroll and there are elements to charge when pokemon number is less than the limit per page
    const newLimit =  (pokemonListLimit - pokemonList.length) % limitOfPokemonToAPIRequest
      dispatch(fetchPokemonsWithDetails(`/pokemon?limit=${newLimit}&offset=${paginationOffset}`) as any) //TODO: fix type
      dispatch(setPaginationOffset(paginationOffset + newLimit))
    }, [inView])

  return (
    <>
      <SearchBar/>
      <PokemonList />
      {pokemonList.length !== pokemonListLimit && <div ref={ref} ></div>}
    </>

  )
}

export default Home
