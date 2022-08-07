//Libraries
import React from 'react'
//Redux
import { shallowEqual, useSelector } from 'react-redux'

//Styles
import { EmptyTeam, PokemonChosenStyled, TeamContainer } from '@styles/Home/PokemonTeam/PokemonTeam'

//Cpmponents
import {PokemonTeamTitles} from './PokemonTeamTitles'
import {PokemonTeamMember} from './PokemonTeamMember'

//Types TS
import { PokemonWithDetails } from '@customTypes/pokemonCustomTypes'
import { SendPokemonOutOfTeam } from './SendPokemonOutOfTeam'

const PokemonTeam = ({isOnView}: {isOnView: (node?: Element | null | undefined) => void}) => {
  const userPokemonTeam: PokemonWithDetails[] = useSelector((state: any) => state.pokemon.pokemonTeam, shallowEqual)
  const showDetails = useSelector((state: any) => state.ui.showDetails, shallowEqual)
  const pokemonToSendToEliminateAnimation: PokemonWithDetails[] = useSelector((state: any) => state.pokemon.pokemonToSendToEliminateAnimation, shallowEqual)

  console.log('pokemonToSendToEliminateAnimation', pokemonToSendToEliminateAnimation)

  return (
    <TeamContainer showDetails={showDetails} ref={isOnView}>
      <PokemonTeamTitles/>
      <img src="https://i.imgur.com/XzODe9l.png" alt=""/>
      {userPokemonTeam.length === 0 &&
        <EmptyTeam>
          <img src="https://i.imgur.com/fTfcC3j.png" alt="" /> 
          <h2>¡Alto ahí persona! Es peligroso andar por la hierba alta sin Pokémon, elige a tus Pokémon favoritos para tu equipo</h2>
        </EmptyTeam>
      }

      {userPokemonTeam.length > 0 &&
        <PokemonChosenStyled>
          {userPokemonTeam.map((pokemon: PokemonWithDetails) => (
            <PokemonTeamMember key={`pokemon-team-${pokemon.id}`} pokemon={pokemon} />
          ))}          
        </PokemonChosenStyled>        
      }

      {pokemonToSendToEliminateAnimation.length  &&
        pokemonToSendToEliminateAnimation.map((pokemon: PokemonWithDetails) => 
          <SendPokemonOutOfTeam key={`pokemon-team-${pokemon.id}`} pokemon={pokemon} />
        )
      }
      {/* <SendPokemonOutOfTeam pokemon={userPokemonTeam[0]} /> */}
    </TeamContainer>
  )
}

export { PokemonTeam }


    {/* <SendPokemonToOak className='poke-gone'>
        <div className='pipe'></div>
        <img className='pokemon' src={userPokemonTeam[0].sprites.front_default} alt="pokemon" />
        <img className="pokeball" src="https://i.imgur.com/XzODe9l.png" alt="pokeball"/>
        <div className='laser'></div>
        <p className='message'>El profesor Oak cuidara bien de {capitalizeFirstLetter(userPokemonTeam[0].name)}</p>
    </SendPokemonToOak> */}