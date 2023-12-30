import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
export default function Navbar() {
    return (
        <div className={styles.container}>
            <Link to='/users'>Gerenciamento de Usuários</Link>
            <nav>
                <ul>
                <li>
                        <Link to='/users'>Página Inicial</Link>
                    </li>
                    <li>
                        <Link to='/create'>Criar usuário</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}