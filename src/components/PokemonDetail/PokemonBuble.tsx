import React from 'react'
import { shallowEqual, useSelector } from 'react-redux'

import { PokemonBubleContainer } from '@styles/PokemonDetail/PokemonBuble'
import { PokemonWithDetails } from '@customTypes/pokemonCustomTypes'
import { getGradientByType } from '@utils/getGradientByType'

import {pokemonListLimit} from '@utils/constants/constants'

const PokemonBuble = () => {
  const pokemonSelected: PokemonWithDetails = useSelector((state: any) => state.pokemonDetail.pokemon, shallowEqual)
  const pokemonList: PokemonWithDetails[] = useSelector((state: any) => state.pokemon.pokemon, shallowEqual)

  const previous = pokemonList.findIndex((pokemon: PokemonWithDetails) => pokemon.name === pokemonSelected.name) - 1
  const next = pokemonList.findIndex((pokemon: PokemonWithDetails) => pokemon.name === pokemonSelected.name) + 1

  console.log(previous, next)

  let previousGradient
  let nextGradient

  if (previous >= 0) {
    previousGradient = getGradientByType(pokemonList[previous].types)
  }

  if (next <= pokemonListLimit) {
    nextGradient = getGradientByType(pokemonList[next].types)
  }

  return (
    <>
      {previous >= 0 && (
        <PokemonBubleContainer selector="previous" gradient={previousGradient}>
          <img src={pokemonList[previous].sprites.front_default} alt={pokemonList[previous].name} />
        </PokemonBubleContainer>
      )}

      {next <= pokemonListLimit && (
      <PokemonBubleContainer selector="next" gradient={nextGradient}>
        <img src={pokemonList[next].sprites.front_default} alt={pokemonList[next].name} />
      </PokemonBubleContainer>
      )}
    </>


  )
}

export {PokemonBuble}