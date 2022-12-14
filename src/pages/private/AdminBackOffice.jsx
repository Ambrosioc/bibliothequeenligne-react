import React from "react";
import { Link } from "react-router-dom";
import BOBooksList from "../../container/BOBooksList";
import { Container } from "../../utils/styles/GlobalStyle";
import { useFetchwithToken } from "../../utils/hooks";

export default function AdminBackOffice() {
  const token = localStorage.getItem("token");

  const { data, isLoading, error } = useFetchwithToken(
    "https://book-api-projet-fin.herokuapp.com/api/books",
    token
  );

  return (
    <Container>
      <h1>Admin Back Office</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, ad
        velit similique vero modi quae animi saepe. Temporibus, deserunt illum.
        Mollitia nesciunt, obcaecati vero ipsam fuga natus quod neque quia?
      </p>
      <Link to={"/admin/user"}>Gestion des utilisateurs cliquer ici</Link>
      <div style={styles.containerBook}>
        <div style={styles.containerTitleAdd}>
          <h3>Listes des livres</h3>
          <button style={styles.bookButton}>Ajouter un livre</button>
        </div>
        <BOBooksList
          data={data}
          isLoading={isLoading}
          error={error}
          token={token}
        />
      </div>
    </Container>
  );
}

const styles = {
  containerBook: {
    width: "100%",
  },
  containerTitleAdd: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
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
