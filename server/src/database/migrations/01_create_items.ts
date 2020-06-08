import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('items', table => {
    table.increments('id').primary();
    table.string('image').notNullable();
    table.string('title').notNullable();
  });
}
// CRIA A TABELA

export async function down(knex: Knex) {
  return knex.schema.dropTable('items');
}
// VOLTAR ATRAS (DELETAR A TABELA)