import { PokemonWithDetails } from "@customTypes/pokemonCustomTypes"

export const saveTeamToLocalStorage = (pokemonList: PokemonWithDetails[]) => {
  const stringifiedItem = JSON.stringify(pokemonList)
  localStorage.setItem("team", stringifiedItem)
}

export const getTeamFromLocalStorage = (): PokemonWithDetails[] => {
  const localStorageItem = localStorage.getItem("team")
  let getItem: PokemonWithDetails[] = []

  if (!localStorageItem) {
    localStorage.setItem("team", JSON.stringify([]))
    getItem = []
  } else {
    getItem = JSON.parse(localStorageItem)
  }

  return getItem
}
