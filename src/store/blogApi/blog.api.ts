import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { RootState } from "..";
import { accountData, ILogReq, IRegRes, IPost, NewPostReq } from "../../models/models";

//const BASE_URL = process.env.BASE_API;

export const blogApi = createApi({
    reducerPath: 'blog/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000/api/',
        prepareHeaders(headers, {getState}) {
            const token = (getState() as RootState).jwt.jwt;

            if (token) {
                headers.set('authorization', token);
            }
            return headers;
        },
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
            }),
            getMe: build.query<accountData, string>({
                query: (token) => ({
                    url: 'auth/me',
                    headers: {authorization: token}
                })
            }),
            getMyPosts: build.query<IPost[], string>({
                query: (token) => ({
                    url: 'posts/user/me',
                    headers: {authorization: token}
                })
            }),
            createPost: build.mutation<IPost, NewPostReq>({
                query: (request: NewPostReq) => ({
                    url: 'posts',
                    method: 'POST',
                    body: request
                })
            })
        }
    }
});

export const {useRegisterUserMutation, useAuthUserMutation, useGetMeQuery, useGetMyPostsQuery, useLazyGetMyPostsQuery} = blogApi;
