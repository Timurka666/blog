import { bindActionCreators, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { accountActions, accountReducer } from "./account.slice";
import { searchPostsActions, searchPostsReducer } from "./allPosts.slice";
import { blogApi } from "./blogApi/blog.api";
import { jwtActions, jwtReducer } from "./jwt.slice";

export const store = configureStore({
    reducer: {
        [blogApi.reducerPath]: blogApi.reducer,
        jwt: jwtReducer,
        account: accountReducer,
        searchPosts: searchPostsReducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(blogApi.middleware)

});

setupListeners(store.dispatch);

const actions = {
    ...jwtActions,
    ...accountActions,
    ...searchPostsActions,
};

export type RootState = ReturnType<typeof store.getState>;

export const useActions = () => {
    const dispatch = useDispatch();

    return bindActionCreators(actions, dispatch);
};
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;