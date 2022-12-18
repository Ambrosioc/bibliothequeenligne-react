import React from "react";
import { useNavigate } from "react-router-dom";
import { StyledLink } from "../../utils/styles/GlobalStyle";
import { Loader } from "../../utils/styles/Loading";
import {
  CardBookInfo,
  CardBookLi,
  CardBookUl,
  CardContainer,
  LastBooksImg,
} from "../../utils/styles/StyledCard";

export default function Card({ lastBooks }) {
  // const { data, isLoading, error } = props;

  const data = lastBooks;
  console.log(data);
  const nagigate = useNavigate();

  // if (error) {
  //   return (
  //     <CardContainer>
  //       <h1>Une erreur est survenue</h1>
  //     </CardContainer>
  //   );
  // }

  return (
    <CardContainer>
      <CardBookUl>
        {data.map((book, index) => (
          <CardBookLi
            key={`${book.name}-${index}`}
            onClick={() =>
              nagigate(`/book/${book._links.self.href.split("/").pop()}`)
            }
          >
            <LastBooksImg
              // src="https://via.placeholder.com/400"
              src={book.coverImage}
              alt={book.title}
            />
            <CardBookInfo>
              <p>
                {book.title} <br /> {book.author.firstName}{" "}
                {book.author.lastName}
              </p>
            </CardBookInfo>
          </CardBookLi>
        ))}
      </CardBookUl>
    </CardContainer>
  );
}
