import './styles.css';
import BtnAPI from "../buttons";
import { Link } from 'react-router-dom';
import { useState } from 'react';

type FormData = {
    userName: any
}

export default function CardAPI() {

    const [formData, setFormData] = useState<FormData>({
        userName: ''
    });

    function handleUserNameChange(e: any) {
        setFormData({ ...formData, userName: e.target.value })
    }

    function handleFormSubmit(e: any) {
        e.preventDefault();
    }

    return (
        <main className='container card-content'>
            <div className='card-find-user'>
                <h2>Encontre um perfil Github</h2>
                <form onSubmit={handleFormSubmit} className='form-find-user'>
                    <input
                        name='userName'
                        value={formData.userName}
                        type='text'
                        placeholder='Usuário Github'
                        onChange={handleUserNameChange} />
                    <Link to={`/find/user/${formData.userName}`}>
                        <button type='submit' className="btn">
                            Encontrar
                        </button>
                    </Link>
                </form>
            </div>

        </main>
    )
}