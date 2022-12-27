import Search from "../components/Search";
import { useLazyGetAllPostsQuery } from "../store/blogApi/blog.api";
import {useEffect} from "react";
import { useAppSelector, useActions } from "../store";
import Preloader from "../components/Preloader";
import AllPosts from "../components/AllPosts";

export default function Home() {
    const [getAllPosts, {data: postsRes, isLoading, isSuccess}]= useLazyGetAllPostsQuery();
    const {searchQuery, allPosts} = useAppSelector(state => state.searchPosts);
    const {pushPosts, searchPosts} = useActions();
    //getAllPosts();
    //pushPosts(postsRes?.posts ?? []);
    const getAndPush = async () => {
        await getAllPosts();
        await pushPosts(postsRes?.posts ?? []);
        }   

    useEffect(() => {
        if (searchQuery === '') {
            getAndPush();
        } else if (searchQuery !== '') {
            pushPosts(postsRes?.posts ?? []);
            searchPosts();
        }
    }, [searchQuery, postsRes]);

    return (
        <>
        <Search />
        {isLoading ? <Preloader /> 
        : <div className="home">
            {allPosts.length !== 0 ? allPosts.map(el => <AllPosts key={el._id}
            title={el.title}
            text={el.text}
            creator={el.username} />) : <h2 className=" mt-[3rem] text-blue-500 text-center text-2xl font-bold">Постов нет.</h2>}
        </div>
        }
        </>
    );
}