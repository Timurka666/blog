import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { accountData, ILogReq, IRegRes } from "../../models/models";

const BASE_URL = process.env.BASE_API;

export const blogApi = createApi({
    reducerPath: 'blog/api',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
    }),
    endpoints(build) {
        return {
            registerUser: build.mutation<IRegRes, ILogReq>({
                query: () => ({
                    url: 'auth/register'
                }),
            }),
            authUser: build.mutation<accountData, ILogReq>({
                query: () => ({
                    url: 'auth/login'
                })
            })
        }
    }
});
