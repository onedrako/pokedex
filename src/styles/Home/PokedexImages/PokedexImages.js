import styled from 'styled-components'

const PokedexImage = styled.img`
  width: 100%;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`

export const PokedexImageTop = styled(PokedexImage)`
  position: fixed;
  top: -35px;
  z-index: 5;
`

export const PokedexImagebot = styled(PokedexImage)`
  position: fixed;
  bottom: -35px;
  z-index: 5;
`
