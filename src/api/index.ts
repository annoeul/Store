import axios from "axios"
import { QueryClient } from "react-query"

export const queryClient = new QueryClient()

export const axiosApi = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
})
