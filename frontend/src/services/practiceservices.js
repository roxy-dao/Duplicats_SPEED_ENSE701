import axios from 'axios'

const getPractices = async () => {
  return axios.get('/api/practices').then((practices) => practices.data)
}

const postPractices = async (practice) => {
  return axios.post('/api/practices', practice).then((practices) => practices.data)
}

export { getPractices, postPractices }
