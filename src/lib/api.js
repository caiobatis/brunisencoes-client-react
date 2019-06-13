import axios from 'axios'

const baseURL = 'http://186.226.56.5:1800'

const api = axios.create({
  baseURL
})

export const postContact = values => {
  return new Promise((resolve, reject) => 
    api.post(`/person/contact/site`, values)
      .then((res) => resolve(res))
      .catch((res) => reject(res)))
}