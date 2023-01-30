import Card from "../components/cards/Card";
import { useFetch } from "../utils/hooks";
import { getLastBooks } from "../services/apis/books/apiBookServices";

export default function LastBooks() {
const { data, isLoading, error } = useFetch(getLastBooks());

  return (
    <>
      <Card data={data} isLoading={isLoading} error={error} />
    </>
  );
}
