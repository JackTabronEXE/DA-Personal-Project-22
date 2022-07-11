import request from 'superagent'

const rootUrl = '/api/v1'

export function addUser(user) {
  console.log(user)
  return request
    .post(rootUrl + '/contacts/add')
    .send(user)
    .then((res) => {
      return res.body
    })
}