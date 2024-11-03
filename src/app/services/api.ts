import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react"
import { BASE_URL } from "../../constants"
import { RootState } from "../store"

const baseQuery = fetchBaseQuery({
  baseUrl: `${BASE_URL}/api`,
  //   prepareHeaders: (Headers, { getState }) => {
  //     const token =
  //       (getState() as RootState).auth.token || localStorage.getItem("token")

  //     if (token) {
  //       Headers.set("authorisation", `Bearer ${token}`)
  //     }
  //     return Headers
  //   },
})
const baseQueryWithRetry = retry(baseQuery, { maxRetries: 1 })
export const api = createApi({
  reducerPath: "splitApi",
  baseQuery: baseQueryWithRetry,
  refetchOnMountOrArgChange: true,
  endpoints: () => ({}),
})
