/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function (knex) {
  return knex.schema.createTable('skills', function (table) {
    table.increments('id')
    table.string('skill_name')
    table.string('proficiency')
    table.string('type')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('skills')
};