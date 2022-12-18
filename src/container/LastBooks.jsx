import Card from "../components/cards/Card";
// import { useFetch } from "../utils/hooks";
import { lastBooks } from "../data";

export default function LastBooks() {
  // const [data, setData] = React.useState([]);
  // const [isLoading, setIsLoading] = React.useState(true);
  // const [error, setError] = React.useState(false);

  // const { data, isLoading, error } = useFetch(
  //   "https://book-api-projet-fin.herokuapp.com/api/lastbooks"
  // );

  return (
    <>
      <Card lastBooks={lastBooks} />
    </>
  );
}
