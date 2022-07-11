import { getSkills } from '../api/skills'

export const SET_SKILLS = 'SET_SKILLS'

export function setSkills(skills) {
  return {
    type: SET_SKILLS,
    payload: skills,
  }
}

export function fetchSkills() {
  return (dispatch) => {
    return getSkills().then((skills) => {
      dispatch(setSkills(skills))
      return null
    })
  }
}