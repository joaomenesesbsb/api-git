import './styles.css';
import userImg from '../../assets/user.png';
import BoxStyles from '../BoxText';

export default function CardUser() {
    return (
        <main className='container'>
            <div className='card-user'>
                <img src={userImg} alt="User" />
                <div className='card-user-rigth'>
                    <h4>Informações</h4>
                    <div>
                        <BoxStyles name='Perfil' content='dyiGFDHBKFG' />
                        <BoxStyles name='Seguidores' content='' />
                        <BoxStyles name='Localidade' content='' />
                        <BoxStyles name='Nome' content='' />
                    </div>
                </div>
            </div>
        </main>
    )
}