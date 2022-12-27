import Search from "../components/Search";
import { useLazyGetAllPostsQuery } from "../store/blogApi/blog.api";
import {useEffect} from "react";
import { useAppSelector, useActions } from "../store";
import Preloader from "../components/Preloader";

export default function Home() {
    const [getAllPosts, {data: postsRes, isLoading}]= useLazyGetAllPostsQuery();
    const {searchQuery, allPosts} = useAppSelector(state => state.searchPosts);
    const {pushPosts, searchPosts} = useActions();
    getAllPosts();
    pushPosts(postsRes?.posts ?? []);


    return (
        <>
        {isLoading ? <Preloader /> 
        : <div className="home">
            <Search />
        </div>
        }
        </>
    );
}