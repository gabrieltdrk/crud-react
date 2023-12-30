import { useState } from 'react';
import styles from './Pages.module.css';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Update() {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const navigate = useNavigate();
    const location = useLocation();
    const id = location.pathname.split("/")[2];

    const handleSubmit = async e => {
        try {
            e.preventDefault();
            await axios.put('http://localhost:8001/users/' + id, user);
            navigate("/users");
        } catch (error) {
            alert("Não foi possível editar o usuário!");
        }
    }

    return(
        <div className={styles.container}>
            <h1>Atualizar usuário</h1>

            <form className={styles.form}>
                <input onChange={handleChange} type="text" name="name" placeholder="Digite o seu nome..." />
                <input onChange={handleChange} type="email" name="email" placeholder="Digite o seu e-mail..." />
                <input onChange={handleChange} type="password" name="password" placeholder="Digite a sua senha..." />
                <button onClick={handleSubmit}>Atualizar usuário</button>
            </form>
        </div>
    )
}