import React from "react";
import { Loader } from "../utils/styles/Loading";
import styled from "styled-components";

const BooksListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

const BooksList = () => {
  return (
    <BooksListContainer>
      <Loader />
    </BooksListContainer>
  );
};

export default BooksList;
