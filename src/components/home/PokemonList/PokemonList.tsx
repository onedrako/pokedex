import React from 'react'
import { shallowEqual, useSelector } from 'react-redux'

import SkeletonPokemonItem from './SkeletonPokemonItem'
import PokemonItem from './PokemonItem'
import { IPokemon } from 'pokeapi-typescript'
import { PokemonListContainer } from '@styles/Home/PokemonList/PokemonList'

const PokemonList = () => {
  const pokemons: IPokemon[] = useSelector((state: any) => state.pokemon.pokemons, shallowEqual)
  const loading: boolean = useSelector((state: any) => state.ui.loading)

  console.log('data', pokemons)
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
          pokemons?.map((pokemon: IPokemon) => (
            <PokemonItem key={`pokemon-list-${pokemon.id}`} pokemon={pokemon} />
          ))
        }

      </PokemonListContainer>
    </>
  )
}

export { PokemonList }
