import './styles.css';
import BtnAPI from "../buttons";
import { Link } from 'react-router-dom';

export default function CardAPI() {
    return (
        <main className='container card-content'>
            <div className='card-find-user'>
                <h2>Encontre um perfil Github</h2>
                <form className='form-find-user'>
                    <input type="text" placeholder='Usuário Github' />
                    <Link to={'/find-user/user'}>
                        <BtnAPI name='Encontrar' />
                    </Link>
                </form>
            </div>

        </main>
    )
}