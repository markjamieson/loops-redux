import { combineReducers } from 'redux'
import composition from './composition'
import player from './player'

const app = combineReducers({
  composition,
  player
})

export default app
