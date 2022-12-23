import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="navbar h-[3.5rem] bg-blue-500 flex justify-between items-center shadow-md px-[0.5rem]">
            <h1 className="text-white font-bold text-lg">Курсовая Работа</h1>
            <ul className="links flex justify-between items-center">
                <li><Link to="/">На главную</Link></li> 
                <li className="mx-[0.7rem]"><Link to="/registration">Регистрация</Link></li>                
                <li><Link to="/auth">Войти</Link></li>                

            </ul>
        </div>
    );
}