import { combineReducers } from 'redux'

import SkillsReducer from './skills'

const reducer = combineReducers({
  skills: SkillsReducer,
})

export default reducer