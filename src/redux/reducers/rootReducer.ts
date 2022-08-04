import pokemonSearcherSlice from '@redux/slices/pokemonSearcherSlice'
import uiErrorSlice from '@redux/slices/uiErrorSlice'
import { combineReducers } from 'redux'
import pokemonSlice from '../slices/pokemonSlice'
import uiSlice from '../slices/uiSlice'

const rootReducer = combineReducers({
  pokemon: pokemonSlice,
  ui: uiSlice,
  uiError: uiErrorSlice,
  pokemonSearcher: pokemonSearcherSlice,
})

export default rootReducer
export type RootState = ReturnType<typeof rootReducer>
