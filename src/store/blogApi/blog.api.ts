import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { RootState } from "..";
import { accountData, ILogReq, IRegRes, IPost, NewPostReq, IMessage, AllPosts } from "../../models/models";

//const BASE_URL = process.env.BASE_API;

export const blogApi = createApi({
    reducerPath: 'blog/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://kursovaya-server.onrender.com/api/',
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
            }),
            deletePost: build.mutation<IMessage, string>({
                query: (id) => ({
                    url: `posts/${id}`,
                    method: 'DELETE'
                })
            }),
            getAllPosts: build.query<AllPosts, void>({
                query: () => ({
                    url: 'posts'
                })
            })
        }
    }
});

export const {
    useRegisterUserMutation,
    useAuthUserMutation,
    useGetMeQuery,
    useGetMyPostsQuery,
    useLazyGetMyPostsQuery,
    useCreatePostMutation,
    useDeletePostMutation,
    useGetAllPostsQuery,
    useLazyGetAllPostsQuery,
} = blogApi;
