export default function AccountMenu() {
    return (
        <div className="flex
        justify-start
        mt-[1rem]
        space-x-[1.5rem]">
            <button className="text-black
                border-blue-500
                border-solid
                border-[2px]
                rounded-lg
                py-[0.5rem]
                px-[1rem]
                hover:bg-blue-500
                hover:text-white
                transition-all">Мои посты</button>
            <button className="text-black
                border-blue-500
                border-solid
                border-[2px]
                rounded-lg
                py-[0.5rem]
                px-[1rem]
                hover:bg-blue-500
                hover:text-white
                transition-all">Создать новый пост</button>
        </div>
    );
}