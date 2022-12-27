import { useSearchParams } from "react-router-dom";
import { useActions } from "../store";

export default function Search() {
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('q');
    const {pushSearch} = useActions();
    const handleSubmit = () => {
        pushSearch(query ?? '');

    };

    return (
        <div className="flex justify-center space-x-[1rem]">
            <input type="search"
            name="search"
            className="
            block
            h-auto
            w-[25rem]
            rounded-full
            border-solid
            border-[0.15rem]
            border-gray-300"
            placeholder="Поиск..."
            onChange={e => setSearchParams({q: e.target.value})}
            value={query ?? ''} />
            <button className="text-blue-500
            border-blue-500
            border-solid
            border-[2px]
            rounded-full
            py-[0.2rem]
            px-[1rem]
            hover:bg-blue-500
            hover:text-white
            block
            font-bold
            transition-all"
            onClick={handleSubmit}>Искать</button>
        </div>
    );
}