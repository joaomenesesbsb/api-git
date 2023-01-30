import { Link } from "react-router-dom";
import BtnStart from "../buttons";

export default function Start() {
    return (
        <main>
            <div className='container'>
            <h2>Desafio Github API</h2>
            <h3>DevSuperior - Escola de programação</h3>
            <Link to={'/find-user'}>
            <BtnStart name='Começar'/>
            </Link>
            </div>
        </main>
    )
}