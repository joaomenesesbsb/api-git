import './styles.css';

type Props = {
    name: string;
    content: string;
}

export default function BoxStyles({ name, content }: Props) {
    return (
        <div className="user-form">
            <div className='card-user-content'> {name}:</div>
            <div className='card-user-content font-weigth-normal'>{content}</div>
        </div>
    );
}