import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IPost } from "../models/models";

interface accState {
    username: string,
    posts: IPost[],
    id: string
}

const initialState: accState = {
    username: '',
    posts: [],
    id: ''
};

export const accountSlice = createSlice({
    name: 'accountSlice',
    initialState,
    reducers: {
        setState: (state, action: PayloadAction<accState>) => {
            state.id = action.payload.id;
            state.username = action.payload.username;
            state.posts = action.payload.posts;
        }
    }
});

export const accountActions = accountSlice.actions;
export const accountReducer = accountSlice.reducer;