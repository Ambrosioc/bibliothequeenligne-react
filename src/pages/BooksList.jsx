import React from "react";
import Footer from "../components/layout/footer/Footer";

import Books from "../container/Books";
import { Container, StyledLink } from "../utils/styles/GlobalStyle";

const BooksList = () => {
  const token = sessionStorage.getItem("token");

  if (!token) {
    return (
      <Container>
        <h1>Vous devez être connecté pour accéder à cette page</h1>
        <StyledLink to="/sign-in">Se connecter</StyledLink>
      </Container>
    );
  }

  return (
    <>
      <Container>
        <Books />
      </Container>
      <Footer />
    </>
  );
};

export default BooksList;
