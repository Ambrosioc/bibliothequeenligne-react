import React from "react";
import Footer from "../components/layout/footer/Footer";

import Books from "../container/Books";
import { Container } from "../utils/styles/GlobalStyle";

const BooksList = () => {
  const token = localStorage.getItem("token");

  if (!token) {
    return (
      <Container>
        <Books />
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
