import './styles.css';
import BoxStyles from '../BoxText';
import { UserDTO } from '../../models/user';

type Props ={
    user: UserDTO
}

export default function CardUser({ user }: Props) {
    return (
        <main className='container'>
            <div className='card-user'>
                <img src={user.avatar_url} alt="User" />
                <div className='card-user-rigth'>
                    <h4>Informações</h4>
                    <div>
                        <BoxStyles name='Perfil' content={user.html_url} />
                        <BoxStyles name='Seguidores' content={user.followers} />
                        <BoxStyles name='Localidade' content={user.location} />
                        <BoxStyles name='Nome' content={user.name} />
                    </div>
                </div>
            </div>
        </main>
    )
}