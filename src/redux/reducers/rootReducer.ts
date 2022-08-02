import { combineReducers } from 'redux'
import pokemonSlice from '../slices/pokemonSlice'
import uiSlice from '../slices/uiSlice'

const rootReducer = combineReducers({
  pokemon: pokemonSlice,
  ui: uiSlice
})

export default rootReducer
