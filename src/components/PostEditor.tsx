import {useState, useEffect} from 'react';
import { useActions, useAppSelector } from '../store';
import { useCreatePostMutation } from '../store/blogApi/blog.api';

export default function PostEditor() {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [status, setStatus] = useState('');
    const [createPost, {data, isSuccess}] = useCreatePostMutation();
    const {addNewPost} = useActions();

    const handleClick = () => {
        if (text && title) {
            createPost({title: title, text: text});
        } else {
            setStatus('Заполните пустые поля!');
        }
    };

    useEffect(() => {
        if (isSuccess === true && data) {
            addNewPost(data);
            setStatus('Пост успешно создан!');
        }
    }, [data]);

    return (
        <div className="mt-[3rem]">
            <h2 className="text-5xl font-bold mb-[1rem] text-blue-700">Создать новый пост</h2>
            <div>
                <input type="text"
                placeholder="Название поста"
                className="w-[30rem]
                h-auto
                rounded-lg
                border-solid
                border-[0.15rem]
                border-gray-300"
                value={title}
                onChange={e => setTitle(e.target.value)}
                />
            </div>
                <textarea placeholder="Текст поста" className="w-[30rem]
                h-auto
                rounded-lg
                border-solid
                border-[0.15rem]
                mt-[1rem]
                border-gray-300"
                value={text}
                onChange={e => setText(e.target.value)}></textarea>
                <button className="text-blue-500
                border-blue-500
                border-solid
                border-[2px]
                rounded-lg
                py-[0.5rem]
                px-[1rem]
                hover:bg-blue-500
                hover:text-white
                block
                transition-all"
                onClick={handleClick}>Создать новый пост</button>
                {status && <p>{status}</p>}
        </div>
    );
}