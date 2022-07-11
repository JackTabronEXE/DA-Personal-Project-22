import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSkills } from '../actions/skills'


function Skills() {
  const skills = useSelector(state => state.skills)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchSkills())
  }, [])


  return (
    <>
    <div className="ds-skills-section">
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
           <h2 className="ds-heading">Core Skills</h2>
           <ul className="ds-skills-list">
            {skills.map((skills) => (
              <li key={skills.skill_name}>
                {skills.skill_name}
              </li>
            )
            )}
           </ul>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
          <h2 className="ds-heading">Other Skills</h2>
          <ul className="ds-skills-list">
            <li>Storyblok</li>
            <li>PWAs</li>
            <li>Responsive Web Design</li>
            <li>React</li>
            <li>Vuetify</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}

export default Skills

   {/* <li>JavaScript</li>
             <li>Node.js</li>
             <li>Express.js</li>
             <li>MongoDB</li>
             <li>Vue.js</li>
             <li>React</li>
             <li>Sequelize</li>
             <li>Github</li>
             <li>HTML</li> */}