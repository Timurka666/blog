import { useGetMeQuery, useLazyGetMyPostsQuery } from "../store/blogApi/blog.api";
import { useActions, useAppSelector } from "../store";
import { useEffect } from "react";
import PostItem from "../components/PostItem";
import AccountMenu from "../components/AccountMenu";

export default function Account() {
    const {jwt} = useAppSelector(state => state.jwt);
    const {id, posts, username} = useAppSelector(state => state.account);
    const {data: account} = useGetMeQuery(jwt);
    const [getPosts, {data: myPosts}] = useLazyGetMyPostsQuery();
    const {setState} = useActions();
    
    useEffect(() => {
        getPosts(jwt);
        setState({id: account?.user._id ?? '', username: account?.user.username ?? '', posts: myPosts ?? []});
    }, [account, myPosts]);

    return (
        <>
            <h1 className="text-6xl
            font-bold">{username}</h1>
            <AccountMenu />
            <div className="posts
            mt-[3rem]">
                <h2 className="text-5xl font-bold mb-[1rem]">Мои посты</h2>
                {posts ? posts.map(el => <PostItem key={el._id}
                title={el.title}
                text={el.text}
                img={el.imgUrl} />) : <p>Постов нет</p>}
            </div>
        </>
    );
}