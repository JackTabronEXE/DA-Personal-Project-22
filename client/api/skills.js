import request from 'superagent'

const rootUrl = '/api/v1'

export function getSkills() {
  return request.get(rootUrl + '/skills').then((res) => {
    return res.body.results
  })
}

