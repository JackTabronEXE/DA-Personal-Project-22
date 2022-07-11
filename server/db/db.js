const connection = require('./connections')

function getSkills(db = connection) {
  return db('skills').select()
}

function getContacts(db = connection) {
  return db('contacts').select()
}

function addContacts(contact, db = connection) {
  return db('contacts').insert(contact)
}

module.exports = {
  getSkills,
  getContacts,
  addContacts
}