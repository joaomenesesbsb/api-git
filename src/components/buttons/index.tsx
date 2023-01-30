type Props = {
    name: string;
}

export default function BtnAPI({ name }: Props) {
    return (
        <div className="btn">
            {name}
        </div>
    );
}