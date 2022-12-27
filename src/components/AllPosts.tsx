

interface IProps {
    title: string,
    text: string,
    creator: string
}

export default function AllPosts(props: IProps) {
    const {title, text, creator} = props;

    return (
        <div>
            <div className="my-[2rem] after:mt-[1rem] after:block after:w-[100hv] after:h-[0.1rem] after:bg-gray-200">
            <h3 className="text-3xl font-bold">{title}</h3>
            <h4 className="text-xl font-bold text-gray-300">Автор: {creator}</h4>
            <p className="text-lg
            my-[2rem]
            w-[30rem]
            h-auto
            whitespace-pre-line
            break-words">{text}</p>
            </div>
        </div>
    );
}