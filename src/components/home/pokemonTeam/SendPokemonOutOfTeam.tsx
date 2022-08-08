import React, { useEffect } from 'react'
import { capitalizeFirstLetter } from '@utils/capitalize'
import { PokemonWithDetails } from '@customTypes/pokemonCustomTypes'
import { SendPokemonToOak } from '@styles/Home/PokemonTeam/PokemonTeamAnimation'
import { useDispatch, useSelector } from 'react-redux'
import { setPokemonListToEliminateAnimation, setPokemonToEliminateLength } from '@redux/slices/pokemonSlice'

const SendPokemonOutOfTeam = ({pokemon}: {pokemon: PokemonWithDetails}) => {
  const dispatch = useDispatch()
  const pokemonListToAnimate = useSelector((state: any) => state.pokemon.pokemonToEliminateFromTeam)
  const pokemonToEliminateLength = useSelector((state: any) => state.pokemon.pokemonToEliminateLength)


  const copy = [...pokemonListToAnimate]

  //This Effect put the tail to the pokemon that have to be erased on [], eliminating all components with animation, only provitional and fot that the code below is commented
  useEffect(() => {
    setTimeout(() => {
      // console.log(" inside set time",pokemonToEliminateLength)
      let pokemonToAnimate: PokemonWithDetails[] = []
      // if (pokemonToEliminateLength >= 1) {
      //   // console.log("erase 1", pokemonToEliminateLength)
      //   pokemonToAnimate = copy.splice(0, 1)

      // }else {
        // console.log("erase all", pokemonToEliminateLength)
      //   pokemonToAnimate = []
      // }
      // console.log("dispatching")
      // console.log("lenght set", pokemonToEliminateLength - 1)
      
      dispatch(setPokemonToEliminateLength(pokemonToEliminateLength - 1))
      // console.log("dispatched", pokemonToEliminateLength)
      dispatch(setPokemonListToEliminateAnimation(pokemonToAnimate as PokemonWithDetails[]))

      }, 15000)
  },[])

  // useEffect(() => {
  //   setTimeout(() => {
  //     let pokemonToAnimate
  //     if (length > 1) {
  //       console.log("erase 1")
  //       pokemonToAnimate = copy.shift()
  //     }else {
  //       console.log("erase all")
  //       pokemonToAnimate = []
  //     }
  //     console.log("dispatching")
  //     dispatch(setPokemonListToEliminateAnimation(pokemonToAnimate as PokemonWithDetails[]))
  //     }, 7000)
  // },[])

  return ( 
    <SendPokemonToOak className='poke-gone'>
      <div className='pipe'></div>
      <img className='pokemon' src={pokemon.sprites.front_default} alt="pokemon" />
      <img className="pokeball" src="https://i.imgur.com/XzODe9l.png" alt="pokeball"/>
      <div className='laser'></div>
      <p className='message'>El profesor Oak cuidara bien de {capitalizeFirstLetter(pokemon.name)}</p>
    </SendPokemonToOak>
  )
}

export {SendPokemonOutOfTeam}