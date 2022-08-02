import { api } from './axiosConfig'

const getData = async (url: string) => {
  try {
    const response = await api.get(url)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export { getData }
