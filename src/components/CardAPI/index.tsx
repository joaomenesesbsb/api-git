import BtnAPI from "../buttons";

export default function CardAPI(){
    return(
        <main>
            <h2>Encontre um perfil Github</h2>
            <form>
                <input type="text" placeholder='Usuário Github'/>
                <BtnAPI name='Encontrar'/>
            </form>
        </main>
    )
}