//Libraries
import React, { useEffect } from 'react'
// Redux
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { setPokemonDetail } from '@redux/slices/pokemonDetailSlice'

//Utils
import { getGradientByType } from '@utils/getGradientByType'

//Styles
import { PokemonBubbleContainer } from '@styles/PokemonDetail/PokemonBubble'

//Types Ts
import { PokemonWithDetails } from '@customTypes/pokemonCustomTypes'
import {limitOfPokemonToAPIRequest, pokemonListLimit} from '@utils/constants/constants'
import { fetchPokemonsWithDetails, setGetMorePokemon, setPaginationOffset } from '@redux/slices/pokemonSlice'


const PokemonBuble = () => {
  const dispatch = useDispatch()
  
  const pokemonSelected: PokemonWithDetails = useSelector((state: any) => state.pokemonDetail.pokemon, shallowEqual)
  const pokemonList: PokemonWithDetails[] = useSelector((state: any) => state.pokemon.pokemon, shallowEqual)
  const getMorePokemon: boolean = useSelector((state: any) => state.pokemon.getMorePokemon, shallowEqual)
  const paginationOffset: number = useSelector((state: any) => state.pokemon.paginationOffset)

  
  const previous = pokemonList.findIndex((pokemon: PokemonWithDetails) => pokemon.name === pokemonSelected.name) - 1
  let next = pokemonList.findIndex((pokemon: PokemonWithDetails) => pokemon.name === pokemonSelected.name) + 1

  const previuosPokemon = pokemonList[previous]
  let nextPokemon = pokemonList[next]

  let previousGradient
  let nextGradient

  if (previous >= 0) {
    previousGradient = getGradientByType(previuosPokemon.types)
  }

  if(next < pokemonList.length) {
    nextGradient = getGradientByType(nextPokemon.types)
  }

  useEffect(() => {
    //This is in case the user scroll and reach the limit of the list that we stablish
    if(pokemonList.length >= pokemonListLimit) {
      return
    }
      
    //This is in case the user scroll but there are elements to charge when pokemon number is more than the limit per page
    if((pokemonListLimit - pokemonList.length) >= limitOfPokemonToAPIRequest){
      dispatch(fetchPokemonsWithDetails(`/pokemon?limit=${limitOfPokemonToAPIRequest}&offset=${paginationOffset}`) as any) //TODO: fix type
      dispatch(setPaginationOffset(paginationOffset + limitOfPokemonToAPIRequest))
      return
    }

    //This is in case the user scroll and there are elements to charge when pokemon number is less than the limit per page
    const newLimit =  (pokemonListLimit - pokemonList.length) % limitOfPokemonToAPIRequest
      dispatch(fetchPokemonsWithDetails(`/pokemon?limit=${newLimit}&offset=${paginationOffset}`) as any) //TODO: fix type
      dispatch(setPaginationOffset(paginationOffset + newLimit))
    }, [getMorePokemon])


  useEffect(() => {
    if(next + 1 === pokemonList.length) {
      dispatch(setGetMorePokemon(!getMorePokemon))
    }
  }, [pokemonSelected])

  return (
    <>
      {previous >= 0 && (
        <PokemonBubbleContainer selector="previous" gradient={previousGradient} onClick={() => dispatch(setPokemonDetail(pokemonList[previous]))}>
          <img src={pokemonList[previous].sprites.front_default} alt={previuosPokemon.name} />
        </PokemonBubbleContainer>
      )}

      {nextPokemon !== undefined && (
        next <= pokemonListLimit && (
          <PokemonBubbleContainer selector="next" gradient={nextGradient} onClick={() => dispatch(setPokemonDetail(nextPokemon))}>
            <img src={nextPokemon?.sprites.front_default} alt={nextPokemon?.name} />
          </PokemonBubbleContainer>
          )
      )}
      
    </>


  )
}

export {PokemonBuble}