import { IPokemon } from "pokeapi-typescript"

export interface Pokemon{
  name: string
  url: string
}

export interface PokemonWithDetails extends IPokemon{
  team: boolean
}

export enum POKEMON_TYPE_COLOR{
  steel = '#8c858c',
  water = '#3399ff',
  bug = '#a4b04f',
  dragon = '#6f55ca',
  electric = '#f9c233',
  ghost = '#5c5c8f',
  fire = '#e5502f',
  fairy = '##e5b3df',
  ice = '#94c2d0',
  fighting = '#ac5140',
  normal = '#b7aeaa',
  grass = '#74c453',
  psychic = '#df5087',
  rock = '#ae9556',
  dark = '#65554b',
  earth = '#dab855',
  poison = '#733f68',
  flying = '#5380c0',
}

export enum POKEMON_TYPE_NAME{
  steel = 'Acero',
  water = 'Agua',
  bug = 'Bicho',
  dragon = 'Dragón',
  electric = 'Eléctrico',
  ghost = 'Fantasma',
  fire = 'Fuego',
  fairy = 'Hada',
  ice = 'Hielo',
  fighting = 'Lucha',
  normal = 'Normal',
  grass = 'Planta',
  psychic = 'Psíquico',
  rock = 'Roca',
  dark = 'Siniestro',
  earth = 'Tierra',
  poison = 'Veneno',
  flying = 'Volador',
}