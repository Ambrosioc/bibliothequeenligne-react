import React from "react";

import Card from "../components/cards/Card";
import { useFetchwithToken } from "../utils/hooks";
import { StyledLink } from "../utils/styles/GlobalStyle";
import { CardContainer } from "../utils/styles/StyledCard";

export default function Books() {
  // const [data, setData] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  const token = localStorage.getItem("token");

  // async function fetchBooks() {
  //   try {
  //     const token = localStorage.getItem("token");
  //     const response = await fetch("http://localhost:8000/api/books", {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //     const data = await response.json();
  //     setData(data);
  //     setIsLoading(false);
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // }

  // useEffect(() => {
  //   fetchBooks();
  //   setIsLoading(true);
  // }, []);
  const { data, isLoading, error } = useFetchwithToken(
    "https://book-api-projet-fin.herokuapp.com/api/books"
  );
  console.log(data);

  if (!token) {
    return (
      <CardContainer>
        <h1>Vous devez être connecté pour accéder à cette page</h1>
        <StyledLink to="/sign-in">Se connecter</StyledLink>
      </CardContainer>
    );
  }

  return (
    <div>
      <Card data={data} isLoading={isLoading} error={error} />
    </div>
  );
}
