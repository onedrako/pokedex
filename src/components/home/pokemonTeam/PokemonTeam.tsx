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
// import { SendPokemonToOak } from '@styles/Home/PokemonTeam/PokemonTeamAnimation'

const PokemonTeam = ({isOnView}: {isOnView: (node?: Element | null | undefined) => void}) => {
  const userPokemonTeam: PokemonWithDetails[] = useSelector((state: any) => state.pokemon.pokemonTeam, shallowEqual)
  const showDetails = useSelector((state: any) => state.ui.showDetails, shallowEqual)

  return (
    <TeamContainer showDetails={showDetails} ref={isOnView}>
      <PokemonTeamTitles/>
      <img src="https://i.imgur.com/XzODe9l.png" alt=""/>
      {userPokemonTeam.length === 0 &&
        <EmptyTeam>
          <img src="https://i.imgur.com/fTfcC3j.png" alt="" />
        
          <h2>¡Alto ahí persona! Es peligroso andar por la hierba alta sin Pokémon, elige a tus Pokémon favoritos para tu equipo</h2>
        </EmptyTeam>
      }s
      {userPokemonTeam.length > 0 &&
        <PokemonChosenStyled>
          {userPokemonTeam.map((pokemon: PokemonWithDetails) => (
            <PokemonTeamMember key={`pokemon-team-${pokemon.id}`} pokemon={pokemon} />
          ))}

          {/* <SendPokemonToOak className='poke-gone'>
            <img src="" alt="transfer-tube" />

          </SendPokemonToOak> */}

        </PokemonChosenStyled>
        
      }
    </TeamContainer>
  )
}

export { PokemonTeam }
