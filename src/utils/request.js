import axios from 'axios'

const service = axios.create({
  baseURL: '/api/v1',
  timeout: 10000,
})

export default service
