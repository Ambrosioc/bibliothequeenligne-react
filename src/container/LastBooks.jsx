import React from "react";
import { lastBooks } from "../data";
import { StyledLink } from "../utils/styles/GlobalStyle";
import {
  CardBookInfo,
  CardBookLi,
  CardBookUl,
  CardContainer,
  LastBooksImg,
} from "../utils/styles/StyledCard";

export default function LastBooks() {
  // const { data, loading, error } = useFetch(
  //   `https://book-api-projet-fin.herokuapp.com/api/lastbooks`
  // );

  const lastBook = lastBooks;
  // console.log(lastBooks);

  // if (error) {
  //   return <div>Une erreur est survenue</div>;
  // }

  return (
    <CardContainer>
      {/* {loading ? (
        <Loader />
      ) : ( */}
      <CardBookUl>
        {lastBook.map((book, index) => (
          <CardBookLi key={`${book.name}-${index}`}>
            <LastBooksImg src={book.coverImage} alt={book.title} />
            <CardBookInfo>
              <h3>{book.title}</h3>
              <p>{book.coverText}</p>
              <p>
                {book.author.firstName} {book.author.lastName}
              </p>
            </CardBookInfo>
            <div>
              <StyledLink to={book._links.self.href}>Plus d'infos</StyledLink>
            </div>
          </CardBookLi>
        ))}
      </CardBookUl>
      {/* )} */}
    </CardContainer>
  );
}
