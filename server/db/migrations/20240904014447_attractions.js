/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('attractions', (table) => {
    table.increments('id').primary()
    table.string('name').notNullable()
    table.string('imageUrl')
    table.float('userRating')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('attractions')
}
