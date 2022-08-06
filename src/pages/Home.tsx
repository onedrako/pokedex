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
import { PokemonDetail } from '@components/home/PokemonDetail/PokemonDetail'
import { TopPokedex } from '@components/home/Pokedex/TopPokedex'
import { BotPokedex } from '@components/home/Pokedex/BotPokedex'

// Styles
import { Main } from '@styles/Home/Home.js'

//Utils
import { limitOfPokemonToAPIRequest, pokemonListLimit } from '@utils/constants/constants'

//Types TS
import { PokemonWithDetails } from '@customTypes/pokemonCustomTypes'
import { Notification } from '@components/home/Events/Notification'
import { NotificationContainer } from '@styles/Home/Pokedex/NotificationContainer'


const Home = () => {
  const paginationOffset: number = useSelector((state: any) => state.pokemon.paginationOffset)
  const pokemonList: PokemonWithDetails[] = useSelector((state: any) => state.pokemon.pokemon, shallowEqual)
  const showDetails: boolean = useSelector((state: any) => state.ui.showDetails)
  const MaxPokemonError: boolean = useSelector((state: any) => state.uiError.maxPokemonError)

  const dispatch = useDispatch<AppDispatch>()

  //Intersection Observer
  const { ref, inView } = useInView({
    threshold: 1
  })


  useEffect(() => {
    //This is in case the user scroll and reach the limit of the list that we stablish
    if(pokemonList.length === pokemonListLimit) {
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
    <Main>
      { MaxPokemonError && 
        <NotificationContainer>
          <Notification/>   
        </NotificationContainer>
      }
      {showDetails && <PokemonDetail/>}
      <PokemonTeam />
      {!showDetails && (
        <>
          <SearchBar/>
          <PokemonList />
          {pokemonList.length !== pokemonListLimit && <div ref={ref} ></div>}
        </>
      )}
    </Main>


  )
}

export default Home
