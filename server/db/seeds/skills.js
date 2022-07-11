/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('skills').del()
  await knex('skills').insert([
    {
      id: 1,
      skill_name: 'Javascript',
      proficiency: '',
      type: 'core'
    },
    {
      id: 2,
      skill_name: 'Node JS',
      proficiency: '',
      type: 'core'
    },
    {
      id: 3,
      skill_name: 'MySQL',
      proficiency: '',
      type: 'core'
    },
    {
      id: 4,
      skill_name: 'React JS',
      proficiency: '',
      type: 'core'
    },
    {
      id: 5,
      skill_name: 'NodeJS',
      proficiency: '',
      type: 'core'
    },
    {
      id: 6,
      skill_name: 'Python',
      proficiency: '',
      type: 'core'
    },
    {
      id: 7,
      skill_name: 'HTML',
      proficiency: '',
      type: 'core'
    },
    {
      id: 8,
      skill_name: 'CSS',
      proficiency: '',
      type: 'core'
    },
  ])
}


//