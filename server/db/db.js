const connection = require('./connections')

function getSkills(db = connection) {
  return db('skills').select()
}

function getContacts(db = connection) {
  return db('contacts').select()
}

module.exports = {
  getSkills,
  getContacts
}