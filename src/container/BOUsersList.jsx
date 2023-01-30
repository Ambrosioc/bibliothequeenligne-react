import React from "react";
import { Link } from "react-router-dom";
import { Container } from "../utils/styles/GlobalStyle";

export default function BOUsersList() {
  const users = [
    {
      lastName: "Doe",
      firstName: "John",
      email: "joedo@gmail.com",
    },
    {
      lastName: "Doe",
      firstName: "Jane",
      email: "jane@gmail.com",
    },
    {
      lastName: "Doe",
      firstName: "Jack",
      email: "jack@jmail.com",
    },
    {
      lastName: "Doe",
      firstName: "John",
      email: "joedo@gmail.com",
    },
    {
      lastName: "Doe",
      firstName: "Jane",
      email: "jane@gmail.com",
    },
    {
      lastName: "Doe",
      firstName: "Jack",
      email: "jack@jmail.com",
    },
    {
      lastName: "Doe",
      firstName: "John",
      email: "joedo@gmail.com",
    },
    {
      lastName: "Doe",
      firstName: "Jane",
      email: "jane@gmail.com",
    },
    {
      lastName: "Doe",
      firstName: "Jack",
      email: "jack@jmail.com",
    },
    {
      lastName: "Doe",
      firstName: "John",
      email: "joedo@gmail.com",
    },
    {
      lastName: "Doe",
      firstName: "Jane",
      email: "jane@gmail.com",
    },
    {
      lastName: "Doe",
      firstName: "Jack",
      email: "jack@jmail.com",
    },
    {
      lastName: "Doe",
      firstName: "John",
      email: "joedo@gmail.com",
    },
    {
      lastName: "Doe",
      firstName: "Jane",
      email: "jane@gmail.com",
    },
    {
      lastName: "Doe",
      firstName: "Jack",
      email: "jack@jmail.com",
    },
    {
      lastName: "Doe",
      firstName: "John",
      email: "joedo@gmail.com",
    },
    {
      lastName: "Doe",
      firstName: "Jane",
      email: "jane@gmail.com",
    },
    {
      lastName: "Doe",
      firstName: "Jack",
      email: "jack@jmail.com",
    },
    {
      lastName: "Doe",
      firstName: "John",
      email: "joedo@gmail.com",
    },
    {
      lastName: "Doe",
      firstName: "Jane",
      email: "jane@gmail.com",
    },
    {
      lastName: "Doe",
      firstName: "Jack",
      email: "jack@jmail.com",
    },
    {
      lastName: "Doe",
      firstName: "John",
      email: "joedo@gmail.com",
    },
    {
      lastName: "Doe",
      firstName: "Jane",
      email: "jane@gmail.com",
    },
    {
      lastName: "Doe",
      firstName: "Jack",
      email: "jack@jmail.com",
    },
    {
      lastName: "Doe",
      firstName: "John",
      email: "joedo@gmail.com",
    },
    {
      lastName: "Doe",
      firstName: "Jane",
      email: "jane@gmail.com",
    },
    {
      lastName: "Doe",
      firstName: "Jack",
      email: "jack@jmail.com",
    },
    {
      lastName: "Doe",
      firstName: "John",
      email: "joedo@gmail.com",
    },
    {
      lastName: "Doe",
      firstName: "Jane",
      email: "jane@gmail.com",
    },
    {
      lastName: "Doe",
      firstName: "Jack",
      email: "jack@jmail.com",
    },
    {
      lastName: "Doe",
      firstName: "John",
      email: "joedo@gmail.com",
    },
    {
      lastName: "Doe",
      firstName: "Jane",
      email: "jane@gmail.com",
    },
    {
      lastName: "Doe",
      firstName: "Jack",
      email: "jack@jmail.com",
    },
    {
      lastName: "Doe",
      firstName: "John",
      email: "joedo@gmail.com",
    },
    {
      lastName: "Doe",
      firstName: "Jane",
      email: "jane@gmail.com",
    },
    {
      lastName: "Doe",
      firstName: "Jack",
      email: "jack@jmail.com",
    },
  ];

  return (
    <Container>
      <div style={styles.containerUser}>
        <Link to={"/admin"} style={styles.link}>
          Gestion des Lives
        </Link>
        <div style={styles.containerTitleAdd}>
          <h3>Liste des utilisateurs</h3>
          <button style={styles.bookButton}>Créer un utilisateur</button>
        </div>
        <ul style={styles.bookUl}>
          {users.map((user, index) => (
            <li key={`${user.name}-${index}`} style={styles.bookLi}>
              <p>{user.lastName}</p>
              <p>{user.firstName}</p>
              <p>{user.email}</p>
              <button style={styles.bookButton}>Modifier</button>
              <button style={styles.bookButton}>Supprimer</button>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}

const styles = {
  containerUser: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  containerTitleAdd: {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  bookUl: {
    width: "100%",
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  bookLi: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0.5rem",
    border: "1px solid #ccc",
    borderRadius: "5px",
    margin: "5px"
  },
  bookButton: {
    display: "block",
    padding: "0.5rem",
    margin: "0.5rem 0",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#ccc",
    color: "#fff",
    fontSize: "1rem",
    fontWeight: "bold",
    cursor: "pointer",
  },
};
