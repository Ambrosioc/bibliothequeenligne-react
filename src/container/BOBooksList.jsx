import React from "react";
import { Link } from "react-router-dom";
import { Container } from "../utils/styles/GlobalStyle";
import { Loader } from "../utils/styles/Loading";

export default function BOBooksList(props) {
  const { data, isLoading, error } = props;
  const books = data;
  console.log(books);

  if (isLoading) {
    return (
      <Container>
        <Loader />
      </Container>
    );
  }

  if (!error) {
    return (
      <Container>
        <ul style={styles.bookUl}>
          {books.map((book, index) => (
            <li key={`${book.name}-${index}`} style={styles.bookLi}>
              <p>{book.title}</p>
              <p>{book.author.lastName}</p>
              <p>{book.author.firstName}</p>
              <Link to={"/"} style={styles.bookButton}>
                Modifier
              </Link>
              <Link style={styles.bookButton}>Supprimer</Link>
            </li>
          ))}
        </ul>
      </Container>
    );
  }

  return (
    <Container>
      <p>Une erreur est survenue</p>
    </Container>
  );
}

const styles = {
  bookUl: {
    width: "100%",
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  bookLi: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0.5rem",
    border: "1px solid #ccc",
    borderRadius: "5px",
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
