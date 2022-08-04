import React from 'react'
import { shallowEqual, useSelector } from 'react-redux'

import SkeletonPokemonItem from './SkeletonPokemonItem'
import PokemonItem from './PokemonItem'
import { PokemonListContainer } from '@styles/Home/PokemonList/PokemonList'
import { PokemonWithDetails } from '@customTypes/pokemonCustomTypes'

const PokemonList = () => {
  const pokemons: PokemonWithDetails[] = useSelector((state: any) => state.pokemon.pokemon, shallowEqual)
  const loading: boolean = useSelector((state: any) => state.ui.loading)
  return (
    <>
      <h2>Elige hasta 6 Pokémon para tu equipo</h2>
      <PokemonListContainer>

        {loading &&
        <>
          <SkeletonPokemonItem/>
          <SkeletonPokemonItem/>
          <SkeletonPokemonItem/>
          <SkeletonPokemonItem/>
          <SkeletonPokemonItem/>
          <SkeletonPokemonItem/>
        </>
        }

        {!loading &&
          pokemons?.map((pokemon: PokemonWithDetails) => (
            <PokemonItem key={`pokemon-list-${pokemon.id}`} pokemon={pokemon} />
          ))
        }

      </PokemonListContainer>
    </>
  )
}

export { PokemonList }
