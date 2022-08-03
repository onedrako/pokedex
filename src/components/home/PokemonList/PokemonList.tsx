import React from 'react'
import { PokemonListContainer } from '@styles/Home/PokemonList/PokemonList'
import SkeletonPokemonItem from './SkeletonPokemonItem'

const PokemonList = () => {
  return (
    <>
      <h2>Elige hasta 6 pokémon para tu equipo</h2>
      <PokemonListContainer>
        <SkeletonPokemonItem/>
        <SkeletonPokemonItem/>
        <SkeletonPokemonItem/>
        <SkeletonPokemonItem/>
        <SkeletonPokemonItem/>
        <SkeletonPokemonItem/>
        <SkeletonPokemonItem/>
        <SkeletonPokemonItem/>
      </PokemonListContainer>
    </>
  )
}

export { PokemonList }
