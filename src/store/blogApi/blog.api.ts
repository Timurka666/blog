import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { accountData, ILogReq, IRegRes } from "../../models/models";

//const BASE_URL = process.env.BASE_API;

export const blogApi = createApi({
    reducerPath: 'blog/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000/api/',
    }),
    endpoints(build) {
        return {
            registerUser: build.mutation<IRegRes, ILogReq>({
                query: (request: ILogReq) => ({
                    url: 'auth/register',
                    method: 'POST',
                    body: request
                }),
            }),
            authUser: build.mutation<accountData, ILogReq>({
                query: (request: ILogReq) => ({
                    url: 'auth/login',
                    method: 'POST',
                    body: request
                })
            })
        }
    }
});

export const {useRegisterUserMutation, useAuthUserMutation} = blogApi;
