import { useState } from "react";
import styles from "./Pages.module.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom'

export default function Create() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await axios.post("http://localhost:8001/users", user);
      navigate("/users");
    } catch (error) {
      alert("Não foi possível cadastrar o usuário!");
    }
  };

  return (
    <div className={styles.container}>
      <h1>Cadastrar usuário</h1>

      <form className={styles.form}>
        <input
          onChange={handleChange}
          type="text"
          name="name"
          placeholder="Digite o seu nome..."
        />
        <input
          onChange={handleChange}
          type="email"
          name="email"
          placeholder="Digite o seu e-mail..."
        />
        <input
          onChange={handleChange}
          type="password"
          name="password"
          placeholder="Digite a sua senha..."
        />
        <button onClick={handleSubmit}>Cadastrar usuário</button>
      </form>
    </div>
  );
}
