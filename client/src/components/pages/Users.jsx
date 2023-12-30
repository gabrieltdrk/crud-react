import axios from "axios";
import { useState, useEffect } from "react";
import styles from "./Pages.module.css";
import { FaEdit, FaTrash } from "react-icons/fa";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const allUsers = async () => {
      try {
        const res = await axios.get("http://localhost:8001/users");
        setUsers(res.data);
      } catch (error) {}
    };
    allUsers();
  }, []);

  const handleDelete = async (id) => {
    const confirm = window.confirm("Deseja realmente apagar o usuário?");

    if (confirm) {
      try {
        await axios.delete("http://localhost:8002/users/" + id);
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleEdit = async (id) => {
    const confirm = window.confirm("Deseja realmente editar o usuário?");
    if (confirm) {
      window.location.href = `/update/${id}`;
    }
  };

  return (
    <div className={styles.container}>
      <h1>Usuários</h1>
      <div className={styles.mapContainer}>
        {users.map((user) => (
          <div className={styles.mapItem} key={user.id}>
            <p>#{user.id}</p>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <div className={styles.mapButtons}>
              <FaEdit onClick={() => handleEdit(user.id)} />
              <FaTrash onClick={() => handleDelete(user.id)} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
