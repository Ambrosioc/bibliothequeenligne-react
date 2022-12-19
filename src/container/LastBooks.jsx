import Card from "../components/cards/Card";
import { useFetch } from "../utils/hooks";

export default function LastBooks() {
  const { data, isLoading, error } = useFetch(
    "https://book-api-projet-fin.herokuapp.com/api/lastbooks"
  );

  return (
    <>
      <Card data={data} isLoading={isLoading} error={error} />
    </>
  );
}
