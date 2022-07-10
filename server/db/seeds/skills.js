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
      cohort: 'Mako 22',
    },
    {
      id: 2,
      name: 'Jack',
      cohort: 'Mako 22',
    },
    {
      id: 3,
      name: 'Cam',
      cohort: 'Mako 22',
    },
    {
      id: 4,
      name: 'Mere',
      cohort: 'Mako 22',
    },
    {
      id: 5,
      name: 'Vincent(Dā Māori JV)',
      cohort: 'Mako 22',
    },
    {
      id: 6,
      name: 'Ngairo(JV Son)',
      cohort: 'Mako 22',
    },
  ])
}


//