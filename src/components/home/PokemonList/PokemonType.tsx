// Libraries
import React from 'react'

// Types TS
import { Type } from '@styles/Home/PokemonList/pokemonType'
import { POKEMON_TYPE_NAME,POKEMON_TYPE_COLOR } from '@customTypes/pokemonCustomTypes'

const PokemonType = ({pokemonType}: {pokemonType: keyof typeof POKEMON_TYPE_NAME }) => {
  return (
    <Type color={POKEMON_TYPE_COLOR[pokemonType]}>{POKEMON_TYPE_NAME[pokemonType]}</Type>
  )
}

export {PokemonType}