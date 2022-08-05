import { combineReducers } from 'redux'

import pokemonSlice from '../slices/pokemonSlice'
import uiSlice from '../slices/uiSlice'
import uiErrorSlice from '@redux/slices/uiErrorSlice'
import pokemonSearcherSlice from '@redux/slices/pokemonSearcherSlice'
import pokemonDetail from '@redux/slices/pokemonDetailSlice'

const rootReducer = combineReducers({
  pokemon: pokemonSlice,
  ui: uiSlice,
  uiError: uiErrorSlice,
  pokemonSearcher: pokemonSearcherSlice,
  pokemonDetail: pokemonDetail,
})

export default rootReducer
export type RootState = ReturnType<typeof rootReducer>
