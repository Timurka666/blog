
interface IProps {
    title: string,
    text: string,
    img?: string
}

export default function PostItem(props: IProps) {
    const {title, text, img} = props;

    return (
        <div className="my-[2rem] after:mt-[1rem] after:block after:w-[100hv] after:h-[0.1rem] after:bg-gray-200">
            <h3 className="text-3xl font-bold">{title}</h3>
            <p className="text-lg mt-[2rem]">{text}</p>
        </div>
    );
}