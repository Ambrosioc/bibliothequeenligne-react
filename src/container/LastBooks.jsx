import Card from "../components/cards/Card";
import { useFetch } from "../utils/hooks";
import { getLastBooks } from "../services/apis/books/apiBookServices";
import { Container } from "../utils/styles/GlobalStyle";
import { Loader } from "../utils/styles/Loading";

export default function LastBooks() {
  const { data, isLoading, error } = useFetch(getLastBooks());

  if (error) {
    <Container>
      <h1>Erreur de reseau</h1>
      <p>Verifier ça connexion internet ou son navigateur</p>
    </Container>;
  }

  return (
    <>
      {isLoading ? <Loader /> : <Card data={data} />}
    </>
  );
}
