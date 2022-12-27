import { Link } from "react-router-dom";
import { useAppSelector } from "../store";

export default function Navbar() {
    const {jwt} = useAppSelector(state => state.jwt);


    return (
        <div className="navbar h-[3.5rem] bg-blue-500 flex justify-between items-center shadow-md px-[0.5rem]">
            <h1 className="text-white font-bold text-lg">Курсовая Работа</h1>
            <ul className="links flex justify-between items-center">
                <li><Link to="/" className="text-white">На главную</Link></li>
                {jwt ? <li className="mx-[0.7rem]"><Link to="/account" className="text-white
                border-white
                border-solid
                border-[2px]
                rounded-lg
                font-xl
                py-[0.5rem]
                px-[1rem]
                hover:bg-white
                hover:text-blue-500
                transition-all">Мой аккаунт</Link></li> :<>
                <li className="mx-[0.7rem]"><Link to="/registration" className="text-white
                border-white
                border-solid
                border-[2px]
                rounded-lg
                font-xl
                py-[0.5rem]
                px-[1rem]
                hover:bg-white
                hover:text-blue-500
                transition-all">Регистрация</Link></li>                
                <li><Link to="/auth" className="text-white
                border-white
                border-solid
                border-[2px]
                rounded-lg
                font-xl
                py-[0.5rem]
                px-[1rem]
                hover:bg-white
                hover:text-blue-500
                transition-all">Войти</Link></li></>}                

            </ul>
        </div>
    );
}