// Libraries
import React from 'react'
//Redux
import { shallowEqual, useSelector } from 'react-redux'

//Components
import PokemonItem from './PokemonItem'
import SkeletonPokemonItem from './SkeletonPokemonItem'

//Styles
import { PokemonListContainer, PokemonListTitle } from '@styles/Home/PokemonList/PokemonList'

//Types
import { PokemonWithDetails } from '@customTypes/pokemonCustomTypes'

const PokemonList = () => {
  const pokemons: PokemonWithDetails[] = useSelector((state: any) => state.pokemon.pokemon, shallowEqual)
  const loading: boolean = useSelector((state: any) => state.ui.loading)
  return (
    <>
      <PokemonListTitle>Elige hasta 6 Pokémon para tu equipo</PokemonListTitle>
      <PokemonListContainer>

        {pokemons.length > 0 &&
          pokemons?.map((pokemon: PokemonWithDetails) => (
            <PokemonItem key={`pokemon-list-${pokemon.id}`} pokemon={pokemon} />
            ))
          }

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
      </PokemonListContainer>
    </>
  )
}

export { PokemonList }
