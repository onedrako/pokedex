// Libraries
import React from 'react'
//Redux
import { shallowEqual, useSelector } from 'react-redux'

//Utils
import { capitalizeFirstLetter } from '@utils/capitalize'
import { getGradientByType } from '@utils/getGradientByType'

//Styles
import { PokemonDetailContainer, PokemonDetailHeader } from '@styles/Home/PokemonDetail/PokemonDetail'

//Types TS
import { IPokemonStat, IPokemonType } from 'pokeapi-typescript'
import { PokemonType } from '../PokemonList/PokemonType'
import { PokemonWithDetails, POKEMON_TYPE_NAME, POKEMON_STATS } from '@customTypes/pokemonCustomTypes'

const PokemonDetail = () => {
  const pokemonSeleted: PokemonWithDetails = useSelector((state: any) => state.pokemonDetail.pokemon, shallowEqual)

  const getStatName = (stat: IPokemonStat) => {
    if(stat.stat.name === 'special-defense') {
      return  POKEMON_STATS.sD
    }
    if(stat.stat.name === 'special-attack') {
      return POKEMON_STATS.sA
    }
    return POKEMON_STATS[stat.stat.name as keyof typeof POKEMON_STATS]

  }

  const gradient = getGradientByType(pokemonSeleted.types)
  return (
    <PokemonDetailContainer>
      <PokemonDetailHeader className='pokemon-details__types-view' gradient={gradient} ></PokemonDetailHeader>
      
      <div className='pokemon-details'>
        <h2 className='pokemon-details__name'>{`#${pokemonSeleted.order} ${capitalizeFirstLetter(pokemonSeleted.name)}` }</h2>
        
        <div className='pokemon-item__types'>
          {pokemonSeleted.types.map((type: IPokemonType) => (
            <PokemonType key={`pokemon-detail-${type.type.name}`} pokemonType={type.type.name as keyof typeof POKEMON_TYPE_NAME} />
          ))}
        </div>
        
        <p className='pokemon-details__height'>{`Altura: ${pokemonSeleted.height/10} m`} </p>
        
        <div className='pokemon-details__stats'>
          {pokemonSeleted.stats.map((stat: IPokemonStat ) => (
            <div className='pokemon-details__stats--container' key={`pokemon-detail-${stat.stat.name}`}>
              <p className='pokemon-details__stats--name'>{getStatName(stat)}</p>
              <p className='pokemon-details__stats--value'>{stat.base_stat} </p>
            </div>
          ))}
        </div>

      </div>

      <img className='pokemon-details__image' src={pokemonSeleted.sprites.front_default} alt={`${pokemonSeleted.name} image`} />
    </PokemonDetailContainer>
  )
}

export {PokemonDetail}