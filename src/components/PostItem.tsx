import { useDeletePostMutation, useLazyGetMyPostsQuery } from "../store/blogApi/blog.api";
import {useActions, useAppSelector} from "../store";

interface IProps {
    _id: string,
    title: string,
    text: string,
    img?: string
}

export default function PostItem(props: IProps) {
    const {title, text, img, _id} = props;
    const [deletePostFromServer, {data}] = useDeletePostMutation();
    const [getPosts, {data: myPosts}] = useLazyGetMyPostsQuery();
    const {jwt} = useAppSelector(state => state.jwt);
    const {deletePost} = useActions();

    const handleClick = async () => {
        await deletePostFromServer(_id);
        await deletePost(_id);
        await getPosts(jwt);
    }

    return (
        <div className="my-[2rem] after:mt-[1rem] after:block after:w-[100hv] after:h-[0.1rem] after:bg-gray-200">
            <h3 className="text-3xl font-bold">{title}</h3>
            <p className="text-lg
            my-[2rem]
            w-[30rem]
            h-auto
            whitespace-pre-line
            break-words">{text}</p>
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
                transition-all"
                onClick={handleClick}>Удалить пост</button>
        </div>
    );
}