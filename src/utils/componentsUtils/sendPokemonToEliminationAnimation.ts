import { PokemonWithDetails } from "@customTypes/pokemonCustomTypes"
import { setPokemonListToEliminateAnimation, setPokemonToEliminateLength, setPokemonToSendToEliminateAnimation } from "@redux/slices/pokemonSlice"
import { AppDispatch } from "index"

export const sendPokemonToSendToEliminateAnimation = (pokemon: PokemonWithDetails, pokemonToSendToEliminateAnimation: PokemonWithDetails[], dispatch: AppDispatch) => {
  
  dispatch(setPokemonToSendToEliminateAnimation([pokemon]))
  dispatch(setPokemonToEliminateLength(pokemonToSendToEliminateAnimation.length + 1))

//   const pokemonRemainingToAnimate = [...pokemonToSendToEliminateAnimation]
  
//   const elimnateOnePokemon = () => {
//     let pokemonToAnimate
//     if (pokemonToSendToEliminateAnimation.length > 0) {
//       pokemonToAnimate = pokemonRemainingToAnimate.shift()
//     }else {
//       pokemonToAnimate = []
//     }
//     console.log(pokemonToAnimate)
//     dispatch(setPokemonListToEliminateAnimation(pokemonToAnimate as PokemonWithDetails[]))
// } 

// setTimeout(elimnateOnePokemon, 7000)


  // console.log("elimnateOnePokemon", elimnateOnePokemon)
  // // const time = 7500 * pokemonRemainingToAnimate.length === 0 ? 7500 : 15000 * pokemonRemainingToAnimate.length

  // // console.log(time)
  // console.log(pokemonRemainingToAnimate)

  // setTimeout(() => {
  //     if(pokemonRemainingToAnimate.length === 0) {
  //       dispatch(setPokemonToSendToEliminateAnimation([]))
  //     } else {
  //       // dispatch(setPokemonToSendToEliminateAnimation(pokemonRemainingToAnimate.shift() || []))
  //     }
    
  // }, 500)

  // const interval = setInterval(() => {
  //   if (pokemonRemainingToAnimate.length === 0) {
  //     clearInterval(interval)
  //     return
  //   }
  //   dispatch(setPokemonToSendToEliminateAnimation(pokemonRemainingToAnimate.shift() ? pokemonRemainingToAnimate.shift() : [] as PokemonWithDetails))
  // })

  
  // setTimeout(() => {
  //   if(!length){
  //     dispatch(setPokemonListToEliminateAnimation([]))
  //     return
  //   }
  //     dispatch(setPokemonListToEliminateAnimation([length]))
  //     if(pokemonRemainingToAnimate.length > 0){
  //       dispatch(setPokemonListToEliminateAnimation([]))        
  //     }
  //     // if( === 0){
  //     //   dispatch(setPokemonListToEliminateAnimation([]))        
  //     // }
  // }, 7000)

  // setTimeout(() => {
  //   if(!length){
  //     dispatch(setPokemonListToEliminateAnimation([]))
  //     return
  //   }
  //     dispatch(setPokemonListToEliminateAnimation([pokemonRemainingToAnimate]))
  //     if(pokemonRemainingToAnimate.length > 0){
  //       dispatch(setPokemonListToEliminateAnimation([]))        
  //     }
      // if( === 0){
      //   dispatch(setPokemonListToEliminateAnimation([]))        
      // }
  // }, 7000)

  // setTimeout(() => {
  //   dispatch(setPokemonListToEliminateAnimation(pokemonRemainingToAnimate))
  // }, pokemonRemainingToAnimate.length === 0 ? 7500 : time)

}
