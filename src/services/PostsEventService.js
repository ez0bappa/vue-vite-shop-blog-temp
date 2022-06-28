import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:8000',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getPosts() {
    return apiClient.get('/posts')
  },
  getPost(id) {
    return apiClient.get('/post/' + id)
  },
  createPost(post) {
    console.log('Bappa')
    return apiClient.post('/posts', post)
  }
}