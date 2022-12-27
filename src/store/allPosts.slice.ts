import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {IPost} from "../models/models";

interface IAllPosts {
    allPosts: IPost[],
    searchQuery: string,
}

const initialState: IAllPosts = {
    allPosts: [],
    searchQuery: ''
}

export const searchPostsSlice = createSlice({
    name: 'searchPosts',
    initialState,
    reducers: {
        pushPosts: (state, action: PayloadAction<IPost[]>) => {
            state.allPosts = action.payload;
        },
        pushSearch: (state, action: PayloadAction<string>) => {
            state.searchQuery = action.payload;
        },
        searchPosts: (state) => {
            state.allPosts = state.allPosts.filter(el => el.title.includes(state.searchQuery));
        }
    }
});

export const searchPostsActions = searchPostsSlice.actions;
export const searchPostsReducer = searchPostsSlice.reducer;