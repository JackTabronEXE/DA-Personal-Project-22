const initialSkillsState = []

const skillssReducer = (state = initialSkillsState, action) => {
  const { type, payload } = action
  switch (type) {
    case 'SET_SKILLS':
      return payload
    default:
      return state
  }
}

export default skillssReducer