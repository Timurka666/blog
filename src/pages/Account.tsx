import { useGetMeQuery, useGetMyPostsQuery } from "../store/blogApi/blog.api";
import { useActions, useAppSelector } from "../store";
import { useEffect } from "react";
import PostItem from "../components/PostItem";
import PostEditor from "../components/PostEditor";
import { useNavigate } from "react-router-dom";
import Preloader from "../components/Preloader";

export default function Account() {
    const {jwt} = useAppSelector(state => state.jwt);
    const {id, posts, username} = useAppSelector(state => state.account);
    const {data: account} = useGetMeQuery(jwt);
    const {data: myPosts, isLoading} = useGetMyPostsQuery(jwt);
    const {setState, removeJwt} = useActions();
    const navigate = useNavigate();

    const exitAcc = () => {
        removeJwt();
        navigate('/');
    };

    useEffect(() => {
        setState({id: account?.user._id ?? '', username: account?.user.username ?? '', posts: myPosts ?? []});
    }, [account, myPosts]);

    return (
        <>
            {isLoading ? <Preloader /> : <>
            
            <h1 className="text-6xl
            font-bold">Добрый день, <span className="text-blue-700">{username}</span></h1>
            <PostEditor />
            <div className="mt-[3rem]">
                <h2 className="text-5xl font-bold mb-[1rem] text-blue-700">Управление аккаунтом</h2>
                <button className="text-red-500
                    border-red-500
                    border-solid
                    border-[2px]
                    rounded-lg
                    py-[0.5rem]
                    px-[1rem]
                    hover:bg-red-500
                    hover:text-white
                    block
                    mt-[3rem]
                    transition-all"
                    onClick={exitAcc}>Выйти из аккаунта</button>
            </div>
            <div className="posts
            mt-[3rem]">
                <h2 className="text-5xl font-bold mb-[1rem]">Мои посты</h2>
                {posts ? posts.map(el => <PostItem key={el._id}
                _id={el._id}
                title={el.title}
                text={el.text}
                img={el.imgUrl} />) : <p>Постов нет</p>}
            </div>
            </>}
        </>
    );
}