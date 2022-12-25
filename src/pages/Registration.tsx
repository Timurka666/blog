import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { useActions } from "../store";
import { useRegisterUserMutation } from "../store/blogApi/blog.api";

export default function Registration() {
    const [register, {data: newUser, isLoading}] = useRegisterUserMutation();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState('');
    const {pushJwt, removeJwt} = useActions();
    const navigate = useNavigate();

    const handleClick = async () => {
        await register({username: username, password: password});
    };

    useEffect(() => {
        // eslint-disable-next-line no-mixed-operators
        setStatus(newUser && newUser.message || '');
        if (newUser?.message === 'Регистрация прошла успешно.') {
            pushJwt(newUser && newUser.token || '');
            setTimeout(() => {navigate('/account')}, 2000);

        }
    }, [newUser && newUser.message]);

    return (
        <>
        <div className="reg-form
        rounded-lg
        border-solid
        border-[0.15rem]
        border-gray-300
        w-[20rem]
        h-[15rem]
        px-[1rem]
        flex
        flex-col
        justify-around
        mx-auto
        shadow-md">
            <h2>Регистрация</h2>

            <input type="text"
            className="w-auto
            h-auto
            rounded-lg
            border-solid
            border-[0.15rem]
            border-gray-300"
            placeholder="Имя пользователя"
            onChange={e => {setUsername(e.target.value)}}
            value={username} />
            
            <input type="password"
            className="w-auto
            h-auto
            rounded-lg
            border-solid
            border-[0.15rem]
            border-gray-300"
            placeholder="Пароль"
            onChange={e => {setPassword(e.target.value)}}
            value={password} />

            <button className="w-[200px]
            h-[40px]
            rounded-lg
            border-solid
            border-[0.15rem]
            bg-blue-500
            text-white"
            onClick={handleClick}>Зарегистрироваться</button>
        </div>
        {status && <p className="mt-[20px] font-lg text-center">{status}</p>}
        </>
    );
}