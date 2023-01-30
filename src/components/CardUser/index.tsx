import './styles.css';
import userImg from '../../assets/user.png';

export default function CardUser() {
    return (
        <main className='container card-content'>
            <div className='card-user'>
                <img src={userImg} alt="User" />
                <div>
                    <h4>Informações</h4>
                    <div>Perfil: </div>
                    <div>Seguidores: </div>
                    <div>Localidade: </div>
                    <div>Nome: </div>
                </div>
            </div>
        </main>
    )
}