export default function Navbar() {
    return (
        <div className="navbar h-[3.5rem] bg-blue-500 flex justify-between items-center shadow-md px-[0.5rem]">
            <h1 className="text-white font-bold text-lg">Курсовая Работа</h1>
            <ul className="links flex justify-between items-center">
                <li>На главную</li> 
                <li className="mx-[0.7rem]"><button>Регистрация</button></li>                
                <li><button>Войти</button></li>                

            </ul>
        </div>
    );
}