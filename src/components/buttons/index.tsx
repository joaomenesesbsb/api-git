type Props = {
    name: string;
}

export default function BtnAPI({ name }: Props) {
    return (
        <button  className="btn">
            {name}
        </button>
    );
}