import './styles.css';
import BtnAPI from "../buttons";

export default function CardAPI() {
    return (
        <main className='container card-content'>
            <div className='card-find-user'>
                <h2>Encontre um perfil Github</h2>
                <form className='form-find-user'>
                    <input type="text" placeholder='Usuário Github' />
                    <BtnAPI name='Encontrar' />
                </form>
            </div>

        </main>
    )
}