import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface JwtState {
    jwt: string
};
const initialState: JwtState = {
    jwt: localStorage.getItem('jwt') ?? ''
};

export const JwtSlice = createSlice({
    name: 'jwt',
    initialState,
    reducers: {
        pushJwt: (state, action: PayloadAction<string>) => {
            state.jwt = action.payload;
            localStorage.setItem('jwt', state.jwt);
        },
        removeJwt: (state) => {
            state.jwt = '';
            localStorage.setItem('jwt', state.jwt);
        }
    }
});

export const jwtActions = JwtSlice.actions;
export const jwtReducer = JwtSlice.reducer;